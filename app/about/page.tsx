import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Scale, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "사무소소개 | 드림파트너스 행정사 사무소",
  description: "엄기대 행정사가 이끄는 드림파트너스 행정사 사무소를 소개합니다. 신뢰와 전문성을 바탕으로 최상의 행정 서비스를 제공합니다.",
}

const timeline = [
  { year: "2004", event: "드림파트너스 행정사 사무소 설립" },
  { year: "2008", event: "외국인 행정 전문 부서 신설" },
  { year: "2012", event: "기업 인허가 서비스 확대" },
  { year: "2016", event: "누적 1,000건 성공 사례 달성" },
  { year: "2020", event: "법인설립 전문 서비스 런칭" },
  { year: "2024", event: "누적 3,000건 성공 사례 달성" },
]

const expertise = [
  {
    icon: Scale,
    title: "비자 업무",
    description: "투자(D-8), 취업(E-7), 영주권(F-5), 재외동포(F-4) 등 모든 비자 유형에 대한 풍부한 경험과 높은 성공률을 자랑합니다."
  },
  {
    icon: BookOpen,
    title: "법인설립",
    description: "비영리법인설립, 농업법인설립 등 다양한 법인 설립 절차를 정확하고 신속하게 처리합니다."
  },
  {
    icon: Users,
    title: "행정심판/인허가",
    description: "행정심판 대리, 각종 인허가 절차를 전문적으로 대행합니다."
  },
  {
    icon: Award,
    title: "부동산",
    description: "부동산 관련 행정 업무를 전문적으로 지원합니다."
  }
]

const strengths = [
  {
    number: "01",
    title: "20년 경력의 노하우",
    description: "2004년 설립 이래 20년간 축적된 경험과 노하우로 복잡한 행정 업무도 정확하게 처리합니다."
  },
  {
    number: "02",
    title: "분야별 전문 인력",
    description: "비자, 인허가, 법인설립 등 각 분야별 전문 행정사가 담당하여 최적의 솔루션을 제공합니다."
  },
  {
    number: "03",
    title: "투명한 업무 진행",
    description: "예상 비용과 기간을 사전에 명확히 안내하며, 업무 진행 상황을 실시간으로 공유합니다."
  },
  {
    number: "04",
    title: "높은 고객 만족도",
    description: "98%의 높은 고객 만족도와 재의뢰율로 신뢰받는 행정 파트너로서 자리매김하고 있습니다."
  }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                    사무소소개
                  </span>
                </div>
                <h1 className="font-serif text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight text-balance">
                  신뢰와 전문성으로<br />
                  행정의 가치를 높입니다
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  드림파트너스 행정사 사무소는 고객의 성공적인 행정 업무 처리를 
                  위해 끊임없이 노력해 왔습니다. 복잡하고 어려운 행정 절차를 명쾌하게 
                  해결하여 고객이 본연의 업무에 집중할 수 있도록 돕는 것이 저희의 사명입니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal-light transition-colors"
                  >
                    상담 신청하기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              {/* CEO Photo */}
              <div className="relative">
                <div className="aspect-[4/5] bg-secondary border border-border overflow-hidden">
                  <img
                    src="/ceo-photo.jpg"
                    alt="엄기대 대표 행정사"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 lg:py-28 bg-charcoal text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  대표 행정사 철학
                </span>
                <div className="w-8 h-px bg-gold" />
              </div>
              
              <blockquote className="font-serif text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-balance">
                &ldquo;행정은 단순한 서류 처리가 아닙니다.<br />
                고객의 꿈과 목표를 실현하는<br />
                가장 중요한 첫 걸음입니다.&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gold text-charcoal flex items-center justify-center font-serif text-xl font-semibold">
                  드
                </div>
                <div className="text-left">
                  <p className="font-medium">엄기대</p>
                  <p className="text-sm text-primary-foreground/60">대표 행정사</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  핵심 강점
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground text-balance">
                드림파트너스 행정사 사무소가<br />
                선택받는 이유
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex gap-6 p-8 bg-card border border-border">
                  <span className="font-serif text-4xl font-light text-gold/40 shrink-0">
                    {strength.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  분야별 전문성
                </span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground text-balance">
                각 분야 최고의 전문성을<br />
                갖추고 있습니다
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="p-8 border border-border hover:border-gold/30 transition-colors group">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                    <item.icon className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  연혁
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground text-balance">
                20년의 발자취
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />
              
              <div className="space-y-8 lg:space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center gap-8 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-2 h-2 bg-gold rounded-full -translate-x-1/2 lg:-translate-x-1" />
                    
                    {/* Content */}
                    <div className={`pl-12 lg:pl-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <span className="font-serif text-2xl text-gold font-medium">{item.year}</span>
                      <p className="text-foreground mt-1">{item.event}</p>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-6 text-balance">
                지금 바로 상담을 시작하세요
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                복잡한 행정 업무, 더 이상 고민하지 마세요.<br />
                전문가가 최적의 해결책을 제시해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal-light transition-colors"
                >
                  무료 상담 신청
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:010-8741-8450"
                  className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  010-8741-8450
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
