export default function Todo({ title, description }) {
  console.log(title, description);
  return (
    <>
      <a
        href="#"
        class="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </>
  );
}
