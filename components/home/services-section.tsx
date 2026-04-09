import { FileText, Building2, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "비자 업무",
    description: "투자, 취업, 영주권, 재외동포 비자 등 모든 비자 유형의 신청 및 연장 업무를 전문적으로 처리합니다.",
    details: ["투자(D-8)", "취업(E-7)", "영주권(F-5)", "재외동포(F-4)"]
  },
  {
    icon: Building2,
    title: "법인설립",
    description: "비영리법인, 농업법인 등 다양한 법인 설립 절차를 정확하고 신속하게 처리합니다.",
    details: ["비영리법인설립", "농업법인설립", "사단법인", "재단법인"]
  },
  {
    icon: Users,
    title: "행정심판/인허가",
    description: "행정심판 대리, 각종 인허가 절차를 전문적으로 대행하여 최적의 결과를 이끌어냅니다.",
    details: ["행정심판 대리", "각종 인허가", "허가 변경/갱신", "행정소송 지원"]
  },
  {
    icon: Briefcase,
    title: "부동산",
    description: "부동산 관련 행정 업무를 전문적으로 지원하여 원활한 거래와 등록을 도와드립니다.",
    details: ["부동산 등기", "용도 변경", "개발행위 허가", "부동산 인허가"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              전문 분야
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-6 text-balance">
            축적된 경험과 전문성으로<br />
            최상의 결과를 약속합니다
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            각 분야별 전문 인력이 체계적인 프로세스로 업무를 진행하며, 
            최신 법규와 행정 동향을 반영한 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 lg:p-10 border border-border hover:border-gold/30 transition-all duration-300 premium-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Details */}
              <ul className="grid grid-cols-2 gap-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
