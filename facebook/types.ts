
type Availability  = "in stock" |"out of stock" 
type Condition = "new" | "refurbished" | "used"
type Currency = "ARS"

interface productos {
    title: string,
    name: string,
    description: string
    availability: Availability
    condition: Condition
    price: number //(100 = 1.00)
    currency: Currency,
    link: string
    brand: string
    url: string,
    image_url: string,
    category: string,
    product_type: string
    retailer_id: string, //medio el id
}