import type { CollectionConfig } from 'payload'
import { admins, adminsAndUser, anyone,
  // checkRole
} from '@/db/access'
import { adminGroups } from '@/db/collections/adminGroups'

export const Hardware: CollectionConfig = {
  slug: 'hardware',
  access: {
    read: adminsAndUser,
    create: admins,
    update: admins,
    delete: admins,
  },
  admin: {
    group: adminGroups.inventory,
    defaultColumns: [
      'images',
      'name',
      'description',
      'resources',
      'quantity',
      'categories',
      'id',
    ]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
     name: 'description',
      type: 'richText',
    },
    {
     name: 'resources',
      type: 'richText',
    },
    {
    name: 'quantity',
    type: 'number',
      admin: {
        position: 'sidebar'
      },
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      admin: {
        position: 'sidebar'
      },
      options: [
        { label: 'Basics', value: 'basics' },
        { label: 'Parts', value: 'parts' },
        { label: 'Communication', value: 'communication' },
        { label: 'Display', value: 'display' },
        { label: 'Microcontrollers', value: 'microcontrollers' },
        { label: 'Power', value: 'power' },
        { label: 'Cables', value: 'cables' },
        { label: 'Motor + control', value: 'motorpluscontrol' },
        { label: 'Sensors', value: 'sensors' },
        { label: 'Peripherals + Accessories', value: 'peripheralsplusaccessories' },
        { label: 'Miscellaneous', value: 'miscellaneous' },
        { label: 'VR', value: 'vr' },
        { label: 'Lottery', value: 'lottery' },
      ],
    },
        {
          name: 'images',
          type: 'array',
      admin: {
        position: 'sidebar'
      },
          fields: [
            {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
            }
          ]
        },
  ],
}

export const hardwareSeedData = [
  {
    images: [
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8359/Raspberry_Pi_Screen_4_1200x__99444.1644935903.jpg?c=2" }
    ],
    name: "1602 LCD Display Module DC 5V 16x2 Blue Backlight",
    description: {
      children: [
        {
          type: "ul",
          children: [
            { type: "li", children: [{ text: "LCD display module with blue backlight" }] },
            { type: "li", children: [{ text: "Wide viewing angle and high contrast" }] },
            { type: "li", children: [{ text: "Built-in industry standard HD44780 equivalent LCD controller" }] },
            { type: "li", children: [{ text: "Commonly used in: copiers, fax machines, laser printers, Raspberry Pi DIY Users" }] },
            { type: "li", children: [{ text: "LCM type: Characters" }] },
            { type: "li", children: [{ text: "Can display 2-lines X 16-characters." }] },
            { type: "li", children: [{ text: "Voltage: 5V DC" }] },
            { type: "li", children: [{ text: "Module size: 80mm x 35mm x 11mm" }] },
            { type: "li", children: [{ text: "Viewing area size: 64.5mm x 16mm" }] }
          ]
        }
      ]
    },
    resources: {
      children: []
    },
    quantity: 40,
    categories: ["display"]
  },
  {
    images: [
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/360/977/apiet5tdg__65616.1554985042.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/360/978/apiwf1p4q__51288.1554985044.jpg?c=2" }
    ],
    name: "Blue Screen LCD12864 Display With Backlight 5V",
    description: {
      children: [
        { type: "paragraph", children: [{ text: "A 128x64 pixel LCD display module with a blue backlight and 5V operation." }] }
      ]
    },
    resources: {
      children: []
    },
    quantity: 25,
    categories: ["display"]
  },
  {
    images: [
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/368/999/apihrfbtv__24433.1554985090.jpg?c=2" }
    ],
    name: "Active Buzzer - 5V",
    description: {
      children: [
        { type: "paragraph", children: [{ text: "A simple 5V active buzzer for sound applications." }] }
      ]
    },
    resources: {
      children: []
    },
    quantity: 50,
    categories: ["peripheralsplusaccessories"]
  },
  {
    images: [
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2596/7310/40_41_42_43_44__80468.1542985281__16363.1618930134.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2596/7309/910_source_1542985282__79719.1618930127.jpg?c=2" }
    ],
    name: "USB A-Male to USB Micro-B Cable - 3ft",
    description: {
      children: [
        { type: "paragraph", children: [{ text: "USB A-Male to USB Micro-B Cable - 3ft. Perfect for Micro:bit and some Arduino boards!" }] }
      ]
    },
    resources: {
      children: []
    },
    quantity: 100,
    categories: ["cables"]
  },
  {
    images: [
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/3685/11887/ABX00083_00.default_1000x750__94279.1714074326.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/3685/11888/ABX00083_01.iso_1000x750__01675.1714074347.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/3685/11889/ABX00083_02.back_1000x750__47015.1714074365.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/3685/11890/ABX00083_03.unbox_1000x750__59921.1714074380.jpg?c=2" },
      { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/3685/11887/ABX00083_00.default_1000x750__94279.1714074326.jpg?c=2" }
    ],
    name: "Arduino Nano ESP32 with Headers",
    description: {
      children: [
        { type: "paragraph", children: [{ text: "An ESP32-based Arduino Nano with headers, ideal for IoT and embedded applications." }] }
      ]
    },
    resources: {
      children: []
    },
    quantity: 30,
    categories: ["microcontrollers"]
  }
];
