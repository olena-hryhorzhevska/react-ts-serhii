export interface OrderFormProps {
  onSubmit: (username: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleAction = (formData: FormData) => {
    const username = formData.get('username') as string;
    onSubmit(username);
  }

  return (
    <div>
      <form action={handleAction}>
        <label>
          Your name:
          <input type="text" name="username" placeholder="Serhii" />
        </label>
        <button type="submit">Place your Order</button>
      </form>
    </div>
  );
}
