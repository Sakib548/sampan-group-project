import Button from "@/components/Button";
import Image from "next/image";
import { ShoppingCart, ArrowRight, Trash2, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen gap-4 bg-gray-800 flex-wrap ">
      <Button variant="primary" size="lg">Primary</Button>
      <Button variant="secondary" size="lg">Secondary</Button>
      <Button variant="outline" size="lg">Outline</Button>
      <Button variant="danger" size="lg">Danger</Button>
      <Button variant="danger" size="lg" borderRadius="rounded-none">Danger</Button>
      <Button variant="primary" size="lg" leftIcon={<ShoppingCart className="size-5" />}>
        Add to Cart
      </Button>
      {/* Cart button with left icon */}
      <Button variant="primary" size="md" leftIcon={<ShoppingCart className="size-5" />}>
        Add to Cart
      </Button>

      {/* Checkout button with right arrow icon */}
      <Button variant="secondary" size="md" rightIcon={<ArrowRight className="size-5" />}>
        Checkout
      </Button>

      {/* Wishlist outline button */}
      <Button variant="outline" size="md" leftIcon={<Heart className="size-5" />}>
        Wishlist
      </Button>

      {/* Delete button with trash icon */}
      <Button variant="danger" size="md" leftIcon={<Trash2 className="size-5" />}>
        Delete Item
      </Button>
      <Button variant="invert" size="lg" borderRadius="rounded-none">Danger</Button>
    </main>
  );
}
