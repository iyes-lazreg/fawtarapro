 import CheckoutForm from "./checkout"



export default function Commander() {
  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-[100px]">
      <div className=" border border-gray-200 p-5">
        <img
          src="product1.png"
          alt="Fawtara pro image"
          className="w-full md:w-[300px] lg:w-[400px] h-auto"
        />
      </div>
      <CheckoutForm />
    </div>
  )
}

