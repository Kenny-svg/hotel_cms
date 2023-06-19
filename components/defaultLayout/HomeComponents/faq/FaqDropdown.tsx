import { Accordion } from "flowbite-react";

const FaqDropdown = () => {
    return (
        <>
            <Accordion className="w-10/12 mx-auto mt-10 mb-10 p-5 py-5 border border-yellow-500">
  <Accordion.Panel>
    <Accordion.Title>
      <p className="font-bold  text-yellow-500">Is there a 247 power supply?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Yes.There's a 24/7 hour light with a standby 30kva and 80kva generator that makes night look like day.
        </p>
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      <p className="font-bold text-yellow-500">Is there maximum security?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Yes. We have one of the best security as a private and hospitality company and the whole of our facility is been monitored by CCtv.
        </p>
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     <p className="font-bold text-yellow-500">Is the place open for business at night?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Yes. We are open for business 24/7
        </p>
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     <p className="font-bold text-yellow-500">Is there a place where one can hold events?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        Yes. There's the Lounge which specious, well decorated that can be used for birthdays and hangout and also the outdoor bar and there's a mini hall too.
        </p>
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     <p className="font-bold text-yellow-500">Is there a DJ? or a Hypeman?</p>
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        <p>
        We have a standby DJ and Hypeman at Caoni Hotel & Suites
        </p>
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
        </>
      );
}
 
export default FaqDropdown;