import React from 'react'

const Footer = () => {
  return (
 <footer className="bg-[#F8F8F8] text-black  py-10 px-6 md:px-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Column 1 */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Osklen</h2>
      <ul className="space-y-2 text-sm text-black">
        <li>International Shipping</li>
        <li>Institute-e</li>
        <li>Policies</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Customer Care</h2>
      <ul className="space-y-2 text-sm ">
        <li>Delivery Time</li>
        <li>Return</li>
        <li>Payment Methods</li>
        <li>Terms & Conditions</li>
        <li>Privacy & Security</li>
      </ul>
    </div>


    <div>
      <h2 className="text-lg font-semibold mb-4">My Account</h2>
      <ul className="space-y-2 text-sm ">
        <li>My Orders</li>
        <li>My Data</li>
        <li>My Profile</li>
      </ul>
    </div>


    <div>
      <h2 className="text-lg font-semibold mb-4">Connect</h2>
      <ul className="space-y-2 text-sm ">
        <li>Contact Us</li>
        <li>Service Center</li>
        <li>Community</li>
      </ul>

   
    </div>
  </div>


 

</footer>

  )
}

export default Footer