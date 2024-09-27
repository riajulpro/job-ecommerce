"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  categories,
  product,
}: {
  categories: Category[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [brandName, setBrandName] = useState(product.brandName);
  const [oldPrice, setOldPrice] = useState(product.oldPrice.toString());
  const [newPrice, setNewPrice] = useState(product.newPrice.toString());
  const [sizes, setSizes] = useState<string[]>(product.sizes);
  const [colors, setColors] = useState<string[]>(product.colors);
  const [thumbnails, setThumbnails] = useState<string[]>(product.thumbnails);
  const [ratings, setRatings] = useState(product.ratings.toString());
  const [categoryId, setCategoryId] = useState(product.categoryId);

  const router = useRouter();

  const handleSizeChange = (size: string) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color: string) => {
    setColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      description,
      brandName,
      oldPrice: parseFloat(oldPrice),
      newPrice: parseFloat(newPrice),
      sizes,
      colors,
      thumbnails,
      ratings: parseFloat(ratings),
      categoryId,
    };

    try {
      await axios.patch(`/api/products/${product.id}`, body);

      toast.success("Product successfully updated!");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="brandName">Brand Name</Label>
        <Input
          id="brandName"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          required
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Label htmlFor="oldPrice">Old Price</Label>
          <Input
            id="oldPrice"
            type="number"
            step="0.01"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="newPrice">New Price</Label>
          <Input
            id="newPrice"
            type="number"
            step="0.01"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label>Sizes</Label>
        <div className="flex space-x-4 mt-2">
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size} className="flex items-center">
              <Checkbox
                id={`size-${size}`}
                checked={sizes.includes(size)}
                onCheckedChange={() => handleSizeChange(size)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Colors</Label>
        <div className="flex space-x-4 mt-2">
          {["Pink", "Red", "Blue"].map((color) => (
            <div key={color} className="flex items-center">
              <Checkbox
                id={`color-${color}`}
                checked={colors.includes(color)}
                onCheckedChange={() => handleColorChange(color)}
              />
              <Label htmlFor={`color-${color}`} className="ml-2">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Thumbnails</Label>
        <div className="space-y-2 mt-2">
          {thumbnails.map((thumbnail, index) => (
            <Input
              key={index}
              value={thumbnail}
              onChange={(e) =>
                setThumbnails((prev) => {
                  const newThumbnails = [...prev];
                  newThumbnails[index] = e.target.value;
                  return newThumbnails;
                })
              }
              placeholder={`Thumbnail URL ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="ratings">Ratings</Label>
        <Input
          id="ratings"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="categoryId">Category ID</Label>
        <Select
          value={categoryId}
          onValueChange={(value) => setCategoryId(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Update Product
      </Button>
    </form>
  );
}
