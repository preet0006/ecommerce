
export const types:string[] =[
  "View All",
  "Shirt",
  "T-Shirt",
  "Backpack",
  "Accessories",
  "Sneakers",
  "Jumpsuit",
  "Blouse",
  "Clothing",
  "Bag",
  "Tank Top",
  "Footwear",
  "Pants"
    
]



export const details = [
  {
    header: "Make Year",
    date: "Aug 2021",
  },
  {
    header: "Registration Year",
    date: "Dec 2021",
  },
  {
    header: "Fuel Type",
    date: "Diesel",
  },
  {
    header: "Km Driven",
    date: "13K km",
  },
  {
    header: "Transmission",
    date: "Manual (Regular)",
  },
  {
    header: "No. of Owner",
    date: "1st Owner",
  },
  {
    header: "Insurance Validity",
    date: "Nov 2025",
  },
  {
    header: "Insurance Type",
    date: "Third Party",
  },
  {
    header: "RTO",
    date: "DL3C",
  },
  {
    header: "Car Location",
    date: "Sector-29, Gurgaon",
  },
];


export const inspectionPoints = {
  condition: [

    { pass: true, title: "Core structure intact" },
    { pass: true, title: "Non-tampered odometer" },
    { pass: true, title: "Non flooded" },
    { pass: true, title: "Engine" },
    { pass: true, title: "Drivetrain" },
    { pass: true, title: "Body structure" },
    { pass: true, title: "Mechanical" },
    { pass: true, title: "Interior" },
    { pass: false, title: "Minor dent" },
    { pass: false, title: "Minor scratches" },

  ],

  tyreLife: [
    {
      position: "Front",

      details: [
        { side: "L", life: "90%" },
        { side: "R", life: "90%" },
      ],
       },
    {
      position: "Rear",

      details: [
        { side: "L", life: "90%" },
        { side: "R", life: "90%" },
        ],

       },

       {
      position: "Spare",
      details: [{ side: "", life: "95%" }],
           },
          ],
        };



  
export const specifications = {
  "Dimension & Capacity": [
    { label: "Ground clearance", value: "226 mm" },
    { label: "Seating capacity", value: "4 units" },
    { label: "Number of seating rows", value: "2 units" },
    { label: "Fuel tank capacity", value: "57 litres" },
    { label: "Alloy wheels", value: "Yes" },
    { label: "Front tyre size", value: "255/65 R18" },
    { label: "Spare wheel", value: "Yes" },
    { label: "Number of doors", value: "3 units" },
  ],

  "Engine & Transmission": [
    { label: "Drivetrain", value: "4WD" },
    { label: "Gear box", value: "6-Speed" },
    { label: "Displacement", value: "2184 cc" },
    { label: "Number of cylinders", value: "4 units" },
    { label: "Valve/cylinder (configuration)", value: "4 units" },
    { label: "Turbocharger", value: "Yes" },
    { label: "Mild hybrid", value: "No" },
  ],

  "Fuel & Performance": [
    { label: "Mileage (ARAI)", value: "15 kmpl" },
    { label: "Max power (bhp)", value: "130 bhp @ 3750 rpm" },
    { label: "Max torque (Nm)", value: "300 Nm @ 1600 rpm" },
  ],

  "Suspension, Steering & Brakes": [
    {
      label: "Suspension front type",
      value:
        "Independent Double Wishbone Front Suspension with Coil Over Damper & Stabiliser Bar",
    },
    {
      label: "Suspension rear type",
      value:
        "Multilink Solid Rear Axle with Coil Over Damper & Stabiliser Bar",
    },
    { label: "Steering adjustment type", value: "Tilt" },
    { label: "Front brake type", value: "Disc" },
    { label: "Rear brake type", value: "Drum" },
    { label: "Steering type", value: "Power" },
    { label: "Minimum turning radius", value: "5.9 meters" },
  ],
};



 export const ProductDetails =  {
  totalCost:1326000,
  minDownPayment:100000,
  maxPayment:30000,
  maxDuration:48,

}



export const carFeatures = {
  "Interior Features": [
    "Rear reading lamp",
    "Digital Clock",
    "Voice command/control",
    "Luggage hook and net",
    "Electrically adjustable ORVM",
    "Electrically adjustable driver seat",
    "2nd row ventilated seat",
    "2nd row AC vent",
    "Heated ORVM",
    "Steering wheel gearshift paddles",
    "Power boot",
    "Outside temperature display",
    "Keyless start",
    "Glove box cooling",
    "Armrest",
    "Folding rear seat",
    "Electrically adjustable headrests",
    "Rear seat centre arm rest",
    "Keyless entry",
    "Elevating gear knob",
    "Cup holders",
    "Trunk/cargo lights",
    "Gear indicator",
    "Window blind",
    "Active noise cancellation",
    "Air suspension",
    "Remote control parking",
    "Gesture control",
    "Three zone climate control",
    "Four zone climate control",
    "Driver ventilated seat",
  ],

  "Entertainment & Communication": [
    "Touch screen infotainment system",
    "Apple CarPlay / Android Auto",
    "GPS navigation system",
    "Integrated 2din audio",
    "Bluetooth compatibility/connectivity",
    "Speakers",
    "AM/FM radio",
    "Integrated (in-dash) music system",
    "Heads up display (HUD)",
    "Auto CD changer",
    "Audio system remote control",
    "CD player",
    "Internal storage/hard drive",
  ],

  "Interior Details": [
    "Digital Tachometer",
    "Digital Instrument cluster",
    "Interior door handles",
    "Leather seats",
    "Leather-wrapped steering wheel",
    "Folding table in the rear",
    "Dual tone dashboard",
    "Cigarette lighter",
  ],

  "Exterior Features": [
    "Rear defogger",
    "Headlights Type - Reflectives",
    "Outside rear view mirrors (ORVMs)",
    "Fog lamps",
    "Side stepper",
    "Tail lamps - LEDs",
    "Sunroof",
    "Tinted window glass",
    "Rain sensing wipers",
    "Rear wiper",
    "Rear power window",
    "Turn indicators on ORVM",
    "Roof rails",
    "Roof carrier",
    "Xenon headlamps / HID headlamps",
    "Chrome front grille",
    "Rear spoiler",
    "Electronic spoiler",
  ],

  "Miscellaneous": [
    "View Similar Cars",
  ],
};


