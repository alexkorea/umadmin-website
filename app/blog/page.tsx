"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from "lucide-react"

const categories = [
  { id: "all", name: "전체", count: 18 },
  { id: "immigration", name: "출입국 업무", count: 5 },
  { id: "corporate", name: "법인설립", count: 4 },
  { id: "appeal", name: "행정심판", count: 3 },
  { id: "permit", name: "인허가", count: 3 },
  { id: "realestate", name: "부동산 행정", count: 3 },
]

const featuredPost = {
  category: "출입국 업무",
  categoryId: "immigration",
  title: "2026년 외국인 비자 정책 변경사항 총정리",
  excerpt:
    "올해 달라지는 외국인 비자 정책과 출입국 관련 주요 변경사항을 정리했습니다. 투자비자(D-8), 취업비자(E-7), 영주권(F-5), 재외동포(F-4) 등 주요 비자 유형별 변경 내용을 확인하세요.",
  date: "2026.04.01",
  readTime: "8분",
  author: "엄기대 행정사",
}

const blogPosts = [
  {
    id: 1,
    category: "법인설립",
    categoryId: "corporate",
    title: "비영리법인 설립 절차와 필수 서류 안내",
    excerpt:
      "비영리법인 설립을 위한 단계별 절차와 준비해야 할 서류를 상세히 안내합니다. 설립허가 신청부터 등기까지 한눈에 확인하세요.",
    date: "2026.03.25",
    readTime: "7분",
    author: "엄기대 행정사",
  },
  {
    id: 2,
    category: "행정심판",
    categoryId: "appeal",
    title: "행정심판 청구 방법과 기간 총정리",
    excerpt:
      "행정처분에 불복할 때 활용할 수 있는 행정심판 제도의 청구 방법, 기간, 절차를 안내합니다.",
    date: "2026.03.18",
    readTime: "6분",
    author: "엄기대 행정사",
  },
  {
    id: 3,
    category: "출입국 업무",
    categoryId: "immigration",
    title: "재외동포(F-4) 비자 신청 자격과 절차",
    excerpt:
      "재외동포 비자(F-4)의 신청 자격, 필요 서류, 심사 기간 등을 상세히 안내합니다. 국적별 주의사항도 함께 확인하세요.",
    date: "2026.03.10",
    readTime: "6분",
    author: "엄기대 행정사",
  },
  {
    id: 4,
    category: "인허가",
    categoryId: "permit",
    title: "각종 인허가 신청 시 주의사항",
    excerpt:
      "사업에 필요한 각종 인허가 신청 절차와 자주 발생하는 반려 사유, 주의사항을 정리했습니다.",
    date: "2026.03.05",
    readTime: "5분",
    author: "엄기대 행정사",
  },
  {
    id: 5,
    category: "부동산 행정",
    categoryId: "realestate",
    title: "토지 개발행위허가 신청 가이드",
    excerpt:
      "토지 개발행위허가의 신청 요건, 절차, 소요 기간을 안내합니다. 허가 기준과 제한 사항도 함께 확인하세요.",
    date: "2026.02.28",
    readTime: "7분",
    author: "엄기대 행정사",
  },
  {
    id: 6,
    category: "법인설립",
    categoryId: "corporate",
    title: "농업법인 설립 요건과 혜택",
    excerpt:
      "농업법인(영농조합법인, 농업회사법인) 설립 요건과 설립 후 받을 수 있는 각종 혜택을 정리했습니다.",
    date: "2026.02.20",
    readTime: "6분",
    author: "엄기대 행정사",
  },
  {
    id: 7,
    category: "출입국 업무",
    categoryId: "immigration",
    title: "투자비자(D-8) 발급 요건과 절차",
    excerpt:
      "외국인 투자비자(D-8) 발급을 위한 투자 요건, 필요 서류, 심사 절차를 상세히 안내합니다.",
    date: "2026.02.15",
    readTime: "8분",
    author: "엄기대 행정사",
  },
  {
    id: 8,
    category: "행정심판",
    categoryId: "appeal",
    title: "이의신청과 행정심판의 차이점",
    excerpt:
      "행정처분에 대한 이의신청과 행정심판의 차이점, 각각의 장단점과 활용 방법을 비교 분석합니다.",
    date: "2026.02.10",
    readTime: "5분",
    author: "엄기대 행정사",
  },
  {
    id: 9,
    category: "부동산 행정",
    categoryId: "realestate",
    title: "토지보상 절차와 권리 보호 방법",
    excerpt:
      "공공사업으로 인한 토지보상 절차와 정당한 보상을 받기 위한 권리 보호 방법을 안내합니다.",
    date: "2026.02.05",
    readTime: "7분",
    author: "엄기대 행정사",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.categoryId === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
                행정 인사이트
              </h1>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                최신 행정 정보와 실무 노하우를 공유합니다
              </p>
            </div>

            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-input bg-card px-12 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-border bg-card">
              <CardContent className="grid gap-6 p-0 lg:grid-cols-2">
                <div className="flex items-center justify-center bg-primary/10 p-8 lg:p-12">
                  <div className="text-center">
                    <BookOpen className="mx-auto h-24 w-24 text-primary opacity-80" />
                    <p className="mt-4 text-sm font-medium text-primary">
                      Featured Article
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {featuredPost.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-card-foreground lg:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime} 읽기
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {featuredPost.author}
                  </p>
                  <Button className="mt-6 w-fit">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories & Posts */}
        <section className="border-t border-border bg-muted/30 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                  }`}
                >
                  {category.name}
                  <span className="ml-1.5 text-xs opacity-70">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {post.author}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        자세히 보기
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search className="h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  검색 결과가 없습니다
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  다른 검색어나 카테고리를 선택해 보세요
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  전체 글 보기
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                행정 뉴스레터 구독
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                최신 행정 정보와 실무 가이드를 이메일로 받아보세요
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                />
                <Button variant="secondary" size="lg">
                  구독하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-primary-foreground/60">
                구독은 무료이며, 언제든 해지할 수 있습니다
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
