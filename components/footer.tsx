import Link from "next/link";

export default function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='container mx-auto px-4 md:px-6 py-4'>
        <div className='text-center text-sm text-muted-foreground'>
          Built with ❤️ using{" "}
          <Link
            href='https://v0.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors'
          >
            v0.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
