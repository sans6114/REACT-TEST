const Titles = ({ children, textSubtitle, btnText }) => {

    return (
        <div className="flex flex-col gap-y-2 text-center">
            <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-10'>
                {children}
            </h2>
            {
                textSubtitle && (<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    {textSubtitle}
                </p>)
            }
            {
                btnText && (<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">)
                    {btnText}
                </a>)
            }
        </div>
    )
}
export default Titles