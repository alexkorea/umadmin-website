import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Target,
  Eye,
  Award,
  Users,
  Building,
  Globe,
  Gavel,
  FileCheck,
  Landmark,
  Scale,
  Shield,
  Briefcase,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "사무소 소개 | 드림파트너스 행정사 사무소",
  description: "풍부한 경험과 전문성을 바탕으로 의뢰인의 행정 업무를 지원하는 드림파트너스 행정사 사무소입니다.",
}

const strengths = [
  {
    icon: Target,
    title: "정확성",
    description: "꼼꼼한 서류 검토와 철저한 절차 관리로 오류 없는 행정 서비스를 제공합니다.",
  },
  {
    icon: Eye,
    title: "투명성",
    description: "모든 업무 진행 과정을 의뢰인에게 투명하게 공개하고 소통합니다.",
  },
  {
    icon: Users,
    title: "전문성",
    description: "각 분야별 전문 지식을 바탕으로 의뢰인에게 맞는 서비스를 제공합니다.",
  },
  {
    icon: Award,
    title: "신뢰성",
    description: "의뢰인과의 신뢰를 바탕으로 장기적인 파트너십을 추구합니다.",
  },
]

const team = [
  {
    name: "엄기대",
    role: "대표 행정사",
    credentials: ["행정사", "법인설립 전문", "출입국 업무"],
    description: "다양한 행정 분야에서 풍부한 경험을 쌓아온 전문 행정사입니다. 비영리법인설립, 출입국 업무, 행정심판 등 복잡한 행정 절차를 체계적으로 처리합니다.",
  },
]

const serviceAreas = [
  { icon: Building, name: "기업 행정", description: "비영리법인설립, 농업법인설립" },
  { icon: Globe, name: "출입국 업무", description: "D-8, E-7, F-5, F-4 비자" },
  { icon: Gavel, name: "행정심판", description: "구제, 이의신청" },
  { icon: Landmark, name: "부동산 행정", description: "개발행위허가, 토지보상" },
  { icon: FileCheck, name: "인허가", description: "각종 인허가 및 등록" },
  { icon: Scale, name: "법인설립", description: "행정조합 및 법인" },
  { icon: Shield, name: "민원 행정", description: "민허가, 등록업무" },
  { icon: Briefcase, name: "재건축/재개발", description: "재건축 재개발 업무" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
                사무소 소개
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
                드림파트너스 행정사 사무소는 풍부한 경험과 전문성을 바탕으로
                <br className="hidden sm:block" />
                의뢰인의 행정 업무를 책임지는 신뢰받는 파트너입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Mission
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  전문 행정 서비스로
                  <br />
                  의뢰인의 꿈을 지원합니다
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {"'"}드림파트너스{"'"}라는 이름처럼, 저희는 의뢰인의 꿈을 실현하는 파트너가 되고자 합니다.
                  복잡한 행정 절차를 대신 처리하여 의뢰인이 본업에 집중할 수 있도록 돕고,
                  단순한 업무 대행을 넘어 신뢰할 수 있는 행정 파트너가 되겠습니다.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  변화하는 법규와 행정 환경 속에서도 의뢰인의 이익을 최우선으로 생각하며,
                  전문성과 성실함으로 최선의 행정 솔루션을 제안해 드리겠습니다.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {strengths.map((item) => (
                  <Card key={item.title} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-y border-border bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Team
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                대표 행정사 소개
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                경험 풍부한 전문 행정사가 의뢰인의 업무를 책임집니다
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-lg">
              {team.map((member) => (
                <Card key={member.name} className="border-border bg-card">
                  <CardContent className="p-8">
                    <img src="/ceo-photo.jpg" alt="엄기대 대표 행정사" className="h-32 w-32 rounded-full object-cover object-top" />
                    <h3 className="mt-6 text-2xl font-semibold text-card-foreground">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary">{member.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.credentials.map((credential) => (
                        <span
                          key={credential}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Service Areas
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                전문 업무 분야
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                다양한 행정 분야의 전문 서비스를 제공합니다
              </p>
            </div>

            <div className="mt-16 grid gap-4 grid-cols-2 md:grid-cols-4">
              {serviceAreas.map((area) => (
                <Card key={area.name} className="border-border bg-card text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-3 font-semibold text-card-foreground">
                      {area.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Contact Us
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  상담 신청
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  행정 관련 문의사항이 있으시면 언제든 연락 주세요.
                  <br />
                  전문 행정사가 친절하게 상담해 드립니다.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">전화 상담</p>
                      <a
                        href="tel:010-8741-8450"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        010-8741-8450
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">이메일 문의</p>
                      <a
                        href="mailto:ukd1211@naver.com"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        ukd1211@naver.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">블로그</p>
                      <a
                        href="https://blog.naver.com/dreampartners123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        blog.naver.com/dreampartners123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">오시는 길</p>
                      <p className="text-lg font-semibold text-foreground">
                        서울 중구 퇴계로324 3층
                      </p>
                      <p className="text-sm text-muted-foreground">
                        성우빌딩
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">운영 시간</p>
                  <p className="mt-1 font-medium text-foreground">
                    평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
                  </p>
                </div>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    온라인 상담 신청
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    아래 양식을 작성해 주시면 빠른 시일 내에 연락드리겠습니다.
                  </p>

                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          성함 <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          연락처 <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        관심 업무
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">선택해 주세요</option>
                        <option value="법인설립">비영리법인설립 / 농업법인설립</option>
                        <option value="출입국">출입국 업무 (D-8, E-7, F-5, F-4)</option>
                        <option value="행정심판">행정심판 / 이의신청</option>
                        <option value="부동산">부동산 관련 (개발행위허가, 토지보상)</option>
                        <option value="인허가">인허가 및 등록업무</option>
                        <option value="재건축">재건축 / 재개발</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      상담 신청하기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      신청 후 영업일 기준 24시간 내에 연락드립니다
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
