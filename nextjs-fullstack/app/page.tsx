import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js 14 Fullstack
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            App Router와 Server Components를 활용한 현대적인 웹 애플리케이션
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">App Router</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Next.js 14의 새로운 App Router와 파일 기반 라우팅
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Server Components</h3>
            <p className="text-gray-600 dark:text-gray-300">
              React Server Components로 최적화된 성능
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-2">NextAuth.js</h3>
            <p className="text-gray-600 dark:text-gray-300">
              안전한 인증 및 세션 관리
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/posts"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            블로그 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
