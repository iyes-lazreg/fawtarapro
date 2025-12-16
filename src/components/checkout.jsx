import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

const STORAGE_KEY = "checkoutOrder"

export default function CheckoutForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")

  // 🔹 Load saved data on first render
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      setName(data.name || "")
      setPhone(data.phone || "")
      setAddress(data.address || "")
    }
  }, [])

  // 🔹 Auto-save whenever user types (even without submit)
  useEffect(() => {
    if (!name && !phone && !address) return

    const orderData = {
      name,
      phone,
      address,
      subtotal: 500,
      delivery: 8,
      total: 508,
      updatedAt: new Date().toISOString(),
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(orderData))
  }, [name, phone, address])
const order = JSON.parse(localStorage.getItem("checkoutOrder"))
console.log(order)

  const validatePhone = (value) => {
    const tunisianPhoneRegex = /^\d{8}$/
    if (!tunisianPhoneRegex.test(value)) {
      setError("Veuillez saisir un numéro de téléphone valide (8 chiffres)")
      return false
    }
    setError("")
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validatePhone(phone)) return

    const orderData = {
      name,
      phone,
      address,
      subtotal: 500,
      delivery:8 ,
      total: 508,
      submittedAt: new Date().toISOString(),
    }

    // 🔹 Update existing saved data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orderData))

    alert("Commande confirmée et mise à jour localement")
  }


  return (
<div className="w-full md:w-[400px] mx-auto border border-gray-200  bg-white">
  <div className="space-y-5 p-6">
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom */}
      <div className="space-y-2">
        <Label>Nom</Label>
        <Input
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Téléphone */}
      <div className="space-y-1">
        <Label>
          Téléphone <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            placeholder="Entrez votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            onBlur={(e) => validatePhone(e.target.value)}
            className={error ? "border-red-500 pr-10" : ""}
          />
          {error && (
            <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      {/* Adresse */}
      <div className="space-y-2">
        <Label>Adresse</Label>
        <Input
          placeholder="Entrez votre adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Bouton */}
      <Button
        type="submit"
        className="w-full !bg-blue-600 hover:bg-blue-700 text-white py-6 text-base rounded-xl"
      >
        ACHETER
      </Button>
    </form>

    {/* Résumé */}
    <div className="border-t pt-4 space-y-2 text-sm">
      <div className="flex justify-between">
        <span>Sous-total</span>
        <span>149.00</span>
      </div>
      <div className="flex justify-between">
        <span>Livraison</span>
        <span>6.00</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>155.00</span>
      </div>
    </div>
  </div>
</div>

  )
}
