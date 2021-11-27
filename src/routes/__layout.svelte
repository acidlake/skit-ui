<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
<svelte:head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  </style>
</svelte:head>
<div class="flex font-roboto">
  <div class="h-screen fixed w-64 border-r overflow-y-scroll xs:hidden md:block">
    <div class="text-2xl p-4 uppercase font-bold text-yellow-500">
      skit ui
    </div>
    <nav>
      <ul>
        <li class="border-b p-2 text-gray-600 opacity-75">General</li>
        <ul>
          <li>
            <a href="/" 
              class="capitalize p-2 block ml-2 border-r-4 hover:bg-yellow-100 hover:text-gray-500 border-yellow-600 bg-yellow-50 text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="/components/typography" 
              class="capitalize p-2 block ml-2 hover:text-yellow-600  text-gray-700">
              typography
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
  <div class="p-4 sm:ml-0 md:ml-64 bg-gray-50 w-full font-roboto">
    <slot>
    </slot>
  </div>
</div>