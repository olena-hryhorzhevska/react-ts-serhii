interface FooterProps {
  name: string;
  age?: number;
  city: string;
}

export default function Footer({ name, age, city}: FooterProps) {
  return (
    <p>
      @2025 My First App from {name}, age { age}, from city { city}
    </p>
  )
} 