import Link from 'next/link'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops! </h1>
            <p>Page not found</p>
            <p>Go back to the 
            <Link href="/">
                    <a>Home Page</a>
                </Link>
            </p>
        </div>
     );
}
 
export default NotFound; 