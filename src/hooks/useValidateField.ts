// src/hooks/useValidateField.ts

import { useState } from "react";
import { ZodSchema } from "zod";

interface UseValidateFieldReturn<T> {
  errors: { [key in keyof T]?: string };
  validateField: (fieldName: keyof T, value: string) => void;
}

function useValidateField<T extends Record<string, any>>(
  schema: ZodSchema<T>
): UseValidateFieldReturn<T> {
  const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});

  const validateField = (fieldName: keyof T, value: string) => {
    const fieldData = { [fieldName]: value };
    const parsed = schema.safeParse(fieldData);

    if (!parsed.success) {
      const fieldError = parsed.error.errors.find(
        (error) => error.path[0] === fieldName
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: fieldError?.message,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    }
  };

  return { errors, validateField };
}

export default useValidateField;
