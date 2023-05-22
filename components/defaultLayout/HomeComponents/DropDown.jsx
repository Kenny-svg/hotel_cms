const Dropdown = () => {
    return ( 
        <>
           <div class=" w-full md:w-auto">
  <h1 class="font-bold">Persons</h1>

  <div class="w-full md:w-auto dropdown inline-block relative">
    <button class="w-full md:w-auto border border-custom-blue py-2 px-20 md:px-8 rounded inline-flex items-center">
      <span class="mr-1">Person</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
      <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    </ul>
  </div>
</div>

        </>
     );
}
 
export default Dropdown;