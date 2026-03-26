import { useParams } from "react-router-dom"

export default function ProductPage() {
  const params = useParams();
  return (
    <>
      <h2>Страница товара</h2>
      <p>Вы выбрали товар с ID: {params.id}</p>
    </>
  )
}