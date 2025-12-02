"use client";

import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction}>
      {/* form fields */}
    </form>
  );
}