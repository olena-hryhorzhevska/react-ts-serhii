import {useState} from "react"

enum Currency {
  USD = "USD",
  EUR = "EUR",
  CAD = "CAD",
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>(Currency.EUR)

  const currencies = Object.values(Currency) // ["USD", "EUR", "CAD"]

  return (
    <>
      <h2>
        Currency Converter
      </h2>
      <input type="number" defaultValue={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      
      <div>
        {currencies.map((c) => (
          <button key={c} onClick={() => setCurrency(c)}>{c}</button>
        ))}
      </div>
      <p>
        You entered {amount} in {currency}!
      </p>
    </>
  )
}