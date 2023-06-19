const TermsOfUse = () => {
    return ( 
        <>
            <div className="w-10/12 mx-auto mt-10">
                <h1 className="font-bold text-xl">Agreement</h1>
                <p className="mt-5">Our services are offered subject to your acceptance, without prejudice, modification of all the terms and conditions contained herein and all other operating policies, rules without limitation and procedures as may be published frim time to time. We may automatically upgrade our services and the agreement will also apply to the upgrade Please kindly read the agreement carefully before accessing or using any of our services.</p>

                <p className="mt-7">By accessing or using any of our services, you agree to become bound by the agreement, terms and conditions. If you do not agree to our terms and policies kindly do not access or use our services.

                </p>

                <h1 className="font-bold text-xl mt-10">Payments</h1>
               

                <p className="mt-7">The following debit card transactions error messages as we will not be responsible for any dibit/dispense error.</p>

                <div className="container mx-auto">
  <table className="table-auto w-full mb-10 mt-10">
    <thead>
      <tr>
        <th className="px-4 py-2">Error message</th>
      
        <th className="px-4 py-2">Error from</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Insufficient funds</td>
       
        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Your bank</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Expired Card</td>
       
        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Your Card</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Issuer or switch Inoperative</td>

        <td className="border px-4 py-2 bg-yellow-500 hover:bg-yellow-300">Your bank</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
        </>
     );
}
 
export default TermsOfUse;