"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function PropertySearch() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "general" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "villa" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("villa")}
        >
          Villa
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "apartment" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("apartment")}
        >
          Apartment
        </button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Keyword</label>
            <input
              type="text"
              placeholder="Looking for?"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm">
              <option>Select Category</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
              <option>Warehouse</option>
              <option>Homestay</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">Location</label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm">
              <option>Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Miami</option>
              <option>San Francisco</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <div className="bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 flex items-center">
            Commercial
            <span className="ml-2 text-xs bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center">6</span>
          </div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 flex items-center">
            Villa
            <span className="ml-2 text-xs bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center">4</span>
          </div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 flex items-center">
            Sales
            <span className="ml-2 text-xs bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center">9</span>
          </div>
        </div>
      </div>
    </div>
  )
}
