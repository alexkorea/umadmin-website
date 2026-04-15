import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  FileText,
  Globe,
  Building2,
  FileCheck,
  Gavel,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
  TrendingUp,
  ChevronRight,
  Scale,
  Landmark,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "기업관련 행정업무",
    description: "농업회사법인·영농조합법인 설립 및 경영컨설팅 등 기업 행정업무를 전문적으로 대행합니다.",
  },
  {
    icon: Globe,
    title: "출입국관련 행정업무",
    description: "투자(D-8), 취업(E-7), 영주권(F-5), 재외동포(F-4) 등 외국인 비자 업무를 전담합니다.",
  },
  {
    icon: Gavel,
    title: "행정심판 및 이의신청",
    description: "행정심판(구제, 이의신청) 등 행정 구제 절차를 통해 의뢰인의 권익을 보호합니다.",
  },
  {
    icon: Landmark,
    title: "부동산관련 업무",
    description: "토지 개발행위허가, 토지보상, 재건축 재개발 등 부동산 관련 행정업무를 처리합니다.",
  },
  {
    icon: FileCheck,
    title: "인허가 및 등록업무",
    description: "각종 인허가 신청, 민원 접수, 등록업무를 신속하고 정확하게 대행합니다.",
  },
  {
    icon: Scale,
    title: "협동조합 및 비영리법인",
    description: "협동조합 및 비영리법인 설립 등 복잡한 행정 절차를 체계적으로 지원합니다.",
  },
]

const stats = [
  { value: "5", label: "년 업력", icon: Clock },
  { value: "500", label: "누적 상담 건수", icon: Users },
  { value: "98%", label: "고객 만족도", icon: TrendingUp },
  { value: "30+", label: "전문 업무 분야", icon: Award },
]

const processSteps = [
  {
    step: "01",
    title: "상담 신청",
    description: "전화 또는 온라인으로 편리하게 상담을 신청하세요.",
  },
  {
    step: "02",
    title: "현황 분석",
    description: "의뢰 내용을 면밀히 검토하고 필요 서류를 안내합니다.",
  },
  {
    step: "03",
    title: "맞춤 제안",
    description: "분석 결과를 바탕으로 최적의 행정 처리 방안을 제안합니다.",
  },
  {
    step: "04",
    title: "업무 수행",
    description: "전문 행정사가 직접 담당하여 업무를 신속히 처리합니다.",
  },
]

const whyChooseUs = [
  {
    title: "전문 행정사 직접 담당",
    description: "경험 풍부한 행정사가 직접 의뢰인을 담당하여 일관된 서비스를 제공합니다.",
  },
  {
    title: "신속하고 정확한 대응",
    description: "행정 이슈 발생 시 빠른 커뮤니케이션과 정확한 해결책을 제시합니다.",
  },
  {
    title: "합리적인 수수료 체계",
    description: "업무 범위에 맞는 투명하고 합리적인 수수료를 적용합니다.",
  },
  {
    title: "원스톱 행정 서비스",
    description: "법인설립부터 인허가, 출입국까지 다양한 행정업무를 한 곳에서 해결합니다.",
  },
]

const insights = [
  {
    category: "행정 가이드",
    title: "비영리법인 설립 절차 완벽 가이드",
    excerpt: "비영리법인 설립에 필요한 서류, 절차, 주의사항을 상세히 정리했습니다.",
    date: "2026.04.01",
  },
  {
    category: "출입국 업무",
    title: "외국인 투자비자(D-8) 발급 요건 총정리",
    excerpt: "D-8 비자 신청 자격, 필요 서류, 심사 기준을 한눈에 확인하세요.",
    date: "2026.03.25",
  },
  {
    category: "행정심판",
    title: "행정심판 청구 시 알아야 할 핵심 사항",
    excerpt: "행정심판의 종류, 청구 기한, 절차를 이해하기 쉽게 안내합니다.",
    date: "2026.03.18",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                행정 업무의 든든한 파트너
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                복잡한 행정, 쉽고 빠르게
                <span className="block text-primary">드림파트너스가 해결합니다</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
                법인설립, 출입국 업무, 행정심판, 인허가까지
                <br className="hidden sm:block" />
                풍부한 경험의 전문 행정사가 맞춤형 행정 서비스를 제공합니다.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/about#contact">
                    무료 상담 신청
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary bg-white hover:bg-primary/5">
                  <Link href="/about">사무소 소개</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Services
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                주요 업무 분야
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                다양한 행정 업무를 전문적으로 처리합니다
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Process
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                업무 진행 프로세스
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                체계적인 프로세스로 정확하고 신속한 서비스를 제공합니다
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Why Choose Us
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  드림파트너스를
                  <br />
                  선택해야 하는 이유
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/80">
                  풍부한 실무 경험과 고객 중심의 서비스로
                  행정 업무의 든든한 파트너가 되겠습니다.
                </p>
                <Button className="mt-8" asChild>
                  <Link href="/about">
                    사무소 자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-card p-6 shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Preview Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Insights
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  행정 인사이트
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  최신 행정 정보와 실무 가이드를 확인하세요
                </p>
              </div>
              <Button variant="ghost" asChild className="hidden sm:flex">
                <Link href="/blog">
                  전체 보기
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((post) => (
                <Link key={post.title} href="/blog" className="group">
                  <Card className="h-full border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mt-4 font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        자세히 보기
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">전체 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                지금 바로 상담을 신청하세요
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                전문 행정사가 최적의 행정 솔루션을 제안해 드립니다
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <Link href="/about#contact">
                    무료 상담 신청
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:010-8741-8450"
                  className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-lg font-semibold">010-8741-8450</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
