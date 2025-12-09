'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

interface Partner {
  name: string;
  description: string;
  image: string;
  subtitle?: string;
  url?: string;
}

export default function Partners() {
  const { t } = useLanguage()
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const governmentPartners = [
    {
      name: t({ JP: "BioNexus ステータス企業", EN: "BioNexus Status Company" }),
      subtitle: t({ JP: "マレーシア政府認可", EN: "Malaysian Government Approved" }),
      description: t({
        JP: "マレーシア政府の特別クラス・バイオテクノロジー企業として認定されており、バイオテクノロジー商業化の進歩のための実質的な財政的インセンティブ、税制優遇、制度的サポートへのアクセスを享受しています。",
        EN: "Certified as a special class biotechnology company by the Malaysian government, enjoying access to substantial financial incentives, tax benefits, and institutional support for advancing biotechnology commercialization."
      }),
      image: "/bionexus-DbMz1jYi.jpeg"
    },
    {
      name: "ASEAN",
      subtitle: t({ JP: "東南アジア諸国連合", EN: "Association of Southeast Asian Nations" }),
      description: t({
        JP: "持続可能な水産養殖および農業セクターにおけるパートナーシップからの公式支援により、東南アジア全10カ国にわたる地域に責任を有し、実際的に実行可能な政策とシステムというASEANの共通ビジョンに貢献しています。",
        EN: "With official support from partnerships in sustainable aquaculture and agriculture sectors, responsible for the region spanning all 10 Southeast Asian countries, contributing to ASEAN's shared vision of practical and implementable policies and systems."
      }),
      image: "/ASEAN-uoWrwKNH.jpeg"
    },
    {
      name: "ANGKASA",
      subtitle: t({ JP: "マレーシア政府機関", EN: "Malaysian Government Agency" }),
      description: t({
        JP: "16,000以上の協同組合と730万人の組合員を代表する協同組合開発庁の組合員として、1,596億収益455億を超える価値を有しており、マレーシアの中核経済活動における第一セクターとして重要な技術革新を果たしています。",
        EN: "As a member of the Cooperative Development Agency representing over 16,000 cooperatives and 7.3 million members, with assets exceeding 159.6 billion in revenue and 45.5 billion in value, playing a crucial technological innovation role as a primary sector in Malaysia's core economic activities."
      }),
      image: "/ANGKASA-BAUWowhT.jpeg"
    },
    {
      name: t({ JP: "インベスト・セランゴール", EN: "Invest Selangor" }),
      subtitle: t({ JP: "政府機関", EN: "Government Agency" }),
      description: t({
        JP: "セランゴール州政府が提供する優遇支援エコシステムのメンバーです。このエコシステムには、効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界別プログラム、ネットワークやインフラへのアクセスが含まれています。これにより、マレーシアで最も経済的に活発な州の一つで、プロジェクトの成功を促進することを目指しています。",
        EN: "Member of the preferential support ecosystem provided by the Selangor State Government, including efficient administrative processes, customized incentive packages, industry-specific programs, and access to networks and infrastructure, aiming to promote project success in one of Malaysia's most economically active states."
      }),
      image: "/Invest_selangor-BU24U3lB.jpeg"
    },
    {
      name: "NEGERI PAHANG",
      subtitle: t({ JP: "パハン州政府", EN: "Pahang State Government" }),
      description: t({
        JP: "マレーシア、パハン州の投資・産業・科学・技術・イノベーション委員会の委員長（パハン州政府）は、特に収穫量の増加、効率、生産性の向上のための技術と近代的な農業手法の使用を通じて、パハン州の農業セクターの経済発展を強化するMother Vegetableへの提案された投資に対する支援を私たちに与えてくれました。パハン州の投資・産業・科学・技術・イノベーション担当執行委員会は、土地、資本、ネットワークを連携させて、大規模な持続可能な農業イニシアチブを加速させる触媒的な役割を果たしています。このパートナーシップは、民間セクターの投資とマレーシアの国家食料安全保障目標との連携を強化します。",
        EN: "The Chairman of the Investment, Industry, Science, Technology and Innovation Committee of Pahang State, Malaysia has given us support for the proposed investment in Mother Vegetable to enhance economic development of Pahang's agricultural sector, particularly through the use of technology and modern farming methods to increase yields, efficiency and productivity. The Executive Committee plays a catalytic role in accelerating large-scale sustainable agriculture initiatives by coordinating land, capital and networks. This partnership strengthens the alignment between private sector investment and Malaysia's national food security objectives."
      }),
      image: "/Negeri-dJn5D2--.jpeg"
    },
    {
      name: "YTAA",
      subtitle: "Yayasan Tengku Abdul Aziz Sultan Abu Bakar",
      description: t({
        JP: "YTAAは社会影響のチャネルとして機能し、サブスクリプションの負担軽減、教育イニシアチブ、ヘルスケア用プログラムやマイクロファイナンスプロジェクトに直接資金を提供することを保証し、地域的な教育全体保健とサステナビリティにおけるエンジニアリングプロジェクトで協力しています。",
        EN: "YTAA functions as a channel for social impact, ensuring direct funding for subscription burden reduction, educational initiatives, healthcare programs and microfinance projects, collaborating on engineering projects in regional education, holistic health and sustainability."
      }),
      image: "/YTAA.jpeg"
    }
  ]

  const japaneseAuthorities = [
    {
      name: t({
        JP: "食品産業・商品・地域開発省（M-FICoRD）サラワク州",
        EN: "Ministry of Food Industry, Commodity and Regional Development (M-FICoRD) Sarawak"
      }),
      description: t({
        JP: "包括的な技術分析提案：サラワク州パダンアイ貯水池におけるテイラピア育成システム。地域の水資源を活用した持続可能な養殖モデルの確立と地域経済の活性化を目指しています。",
        EN: "Comprehensive technical analysis proposal: Tilapia farming system at Padang Ai Reservoir in Sarawak. Aiming to establish sustainable aquaculture models utilizing regional water resources and revitalize the local economy."
      }),
      image: "/m-ficord.jpeg"
    },
    {
      name: t({ JP: "河津町（日本）", EN: "Kawazu Town (Japan)" }),
      description: t({
        JP: "日本におけるMother Vegetableを核とした包括的な事業提携による海洋産業の振興。",
        EN: "Promotion of marine industry through comprehensive business partnerships centered on Mother Vegetable in Japan."
      }),
      image: "/kawazu-town.jpeg"
    },
    {
      name: t({ JP: "静岡県（日本）", EN: "Shizuoka Prefecture (Japan)" }),
      description: t({
        JP: "海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。",
        EN: "Providing comprehensive prefectural-level support systems for marine industry development and sustainable technology implementation."
      }),
      image: "/shizuoka-prefecture.jpeg"
    },
    {
      name: t({ JP: "板橋区（日本）", EN: "Itabashi Ward (Japan)" }),
      description: t({
        JP: "都市部における持続可能な農業技術の実装と地域コミュニティとの協力により、都市農業の新しいモデルを構築しています。",
        EN: "Building new models of urban agriculture through implementation of sustainable agricultural technology in urban areas and cooperation with local communities."
      }),
      image: "/itabashi-ward.jpeg"
    },
    {
      name: t({ JP: "水産庁（日本）", EN: "Fisheries Agency (Japan)" }),
      description: t({
        JP: "日本の水産業における持続可能な養殖技術の開発と実装に関する政策支援と技術指導を提供しています。",
        EN: "Providing policy support and technical guidance for the development and implementation of sustainable aquaculture technologies in Japan's fisheries industry."
      }),
      image: "/fisheries-agency.jpeg"
    }
  ]

  const universityPartners = [
    {
      name: t({ JP: "ノッティンガム大学", EN: "University of Nottingham" }),
      description: t({
        JP: "キャンパス内にMother Vegetable事業のための3エーカーの施設を提供することで戦略的協力を構築し、研究開発の進歩のために尊敬されるバイオテクノロジーチームによって支援されています。",
        EN: "Building strategic cooperation by providing a 3-acre facility on campus for Mother Vegetable business, supported by a respected biotechnology team for research and development advancement."
      }),
      image: "/nottingham-DhRxKkRV.jpeg"
    },
    {
      name: t({ JP: "シンガポール国立大学", EN: "National University of Singapore" }),
      description: t({
        JP: "農業、水産養殖、生物学的防除剤、製品開発において科学的専門知識とイノベーションを提供するパートナーシップを形成しています。私たちの活動の基礎となる科学を強化し、イニシアチブが最先端の研究に基づいていることを保証することが重要です。彼らの支援により、特に私たちの主力プロジェクトであるMother Vegetableを通じて、持続可能なソリューションの開発と商業化を加速することができます。",
        EN: "Forming partnerships that provide scientific expertise and innovation in agriculture, aquaculture, biological control agents, and product development. It is crucial to strengthen the science underlying our activities and ensure initiatives are based on cutting-edge research. With their support, we can accelerate the development and commercialization of sustainable solutions, particularly through our flagship Mother Vegetable project."
      }),
      image: "/nus-DXjhKCmx.jpeg"
    },
    {
      name: t({ JP: "マラヤ大学", EN: "University of Malaya" }),
      description: t({
        JP: "マレーシアの最高学府であるマラヤ大学との研究開発における協力。大学の優れた学術的洞察と科学的専門知識により、私たちの技術革新は大きく前進しています。この産学連携を通じて、理論と実践の融合を実現し、持続可能な技術の社会実装を加速しています。",
        EN: "Collaborating in research and development with University of Malaya, Malaysia's premier institution. Our technological innovation is significantly advancing through the university's excellent academic insights and scientific expertise. Through this industry-academia collaboration, we realize the fusion of theory and practice, accelerating the social implementation of sustainable technologies."
      }),
      image: "/universiti-malaya-CUcQB_Zx.jpeg"
    },
    {
      name: t({ JP: "マレーシア工科大学", EN: "Universiti Teknologi Malaysia" }),
      description: t({
        JP: "工学とテクノロジー分野における卓越性を持つマレーシア工科大学との協力により、Mother Vegetableプロジェクトの技術的基盤を強化しています。特に、持続可能な生産システムの最適化と効率化において、大学の先進的な研究成果を活用しています。",
        EN: "Strengthening the technical foundation of the Mother Vegetable project through collaboration with Universiti Teknologi Malaysia, which has excellence in engineering and technology fields. In particular, we utilize the university's advanced research results in optimizing and improving the efficiency of sustainable production systems."
      }),
      image: "/utm-CeWDQQCb.jpeg"
    }
  ]

  const internationalOrganizations = [
    {
      name: "ERIA",
      description: t({
        JP: "東アジア・ASEAN経済研究センター（ERIA）との協力により、地域経済統合と持続可能な開発に関する政策研究を推進しています。ERIAの専門知識を活用し、Mother Vegetableプロジェクトの地域展開における経済的・社会的インパクトを最大化しています。",
        EN: "Promoting policy research on regional economic integration and sustainable development through cooperation with the Economic Research Institute for ASEAN and East Asia (ERIA). Utilizing ERIA's expertise to maximize the economic and social impact of the Mother Vegetable project's regional deployment."
      }),
      image: "/eria.jpeg"
    },
    {
      name: "JAIF",
      description: t({
        JP: "日本ASEAN統合基金（JAIF）の支援により、ASEAN地域における持続可能な農業と水産養殖の発展を促進しています。この協力により、技術移転と能力構築を通じて、地域全体の食料安全保障と経済発展に貢献しています。",
        EN: "Promoting the development of sustainable agriculture and aquaculture in the ASEAN region with support from the Japan-ASEAN Integration Fund (JAIF). Through this cooperation, we contribute to regional food security and economic development through technology transfer and capacity building."
      }),
      image: "/jaif.jpeg"
    }
  ]

  const otherPartners = [
    {
      name: "Revoganix",
      description: t({
        JP: "持続可能な農業と水産養殖のソリューションにおける戦略的パートナーとして、Revoganixは革新的な微生物技術と有機農法の専門知識を提供しています。共同で、化学肥料や農薬に依存しない持続可能な生産システムの開発を推進しています。",
        EN: "As a strategic partner in sustainable agriculture and aquaculture solutions, Revoganix provides expertise in innovative microbial technology and organic farming methods. Together, we are advancing the development of sustainable production systems that do not rely on chemical fertilizers or pesticides."
      }),
      image: "/revoganix.jpeg"
    },
    {
      name: t({ JP: "バイオエコノミー・コーポレーション", EN: "Bioeconomy Corporation" }),
      description: t({
        JP: "マレーシアのバイオ経済発展を推進する政府系機関として、バイオエコノミー・コーポレーションは、Mother Vegetableプロジェクトの商業化と市場展開において重要な支援を提供しています。",
        EN: "As a government agency promoting Malaysia's bioeconomy development, Bioeconomy Corporation provides crucial support in the commercialization and market deployment of the Mother Vegetable project."
      }),
      image: "/bioeconomy.jpeg"
    },
    {
      name: t({ JP: "テマセク財団", EN: "Temasek Foundation" }),
      description: t({
        JP: "シンガポールを拠点とする国際的な慈善財団であるテマセク財団との協力により、持続可能な開発と社会的インパクトの創出に取り組んでいます。特に、気候変動対策と食料安全保障の分野において、革新的なソリューションの展開を支援しています。",
        EN: "Through cooperation with Temasek Foundation, an international charitable foundation based in Singapore, we are working on sustainable development and creating social impact. In particular, we support the deployment of innovative solutions in the areas of climate change mitigation and food security."
      }),
      image: "/temasek.jpeg"
    },
    {
      name: "Cropabl",
      description: t({
        JP: "農業技術とデジタルソリューションの専門企業であるCropablとの提携により、Mother Vegetableの生産管理と品質管理の最適化を実現しています。IoTセンサーとAI技術を活用した精密農業システムの導入により、生産効率と製品品質の向上を図っています。",
        EN: "Through partnership with Cropabl, a specialist company in agricultural technology and digital solutions, we are optimizing production management and quality control of Mother Vegetable. By introducing precision agriculture systems utilizing IoT sensors and AI technology, we are improving production efficiency and product quality."
      }),
      image: "/cropabl.jpeg"
    },
    {
      name: t({ JP: "サバ州投資局", EN: "Sabah Investment" }),
      description: t({
        JP: "マレーシア・サバ州における投資促進機関として、サバ州投資局は、Mother Vegetableプロジェクトの州内展開において、土地取得、インフラ整備、行政手続きなどの包括的な支援を提供しています。",
        EN: "As an investment promotion agency in Sabah State, Malaysia, Sabah Investment provides comprehensive support including land acquisition, infrastructure development, and administrative procedures for the deployment of the Mother Vegetable project within the state."
      }),
      image: "/sabah-invest.jpeg"
    },
    {
      name: "Healcom",
      description: t({
        JP: "ヘルスケアとウェルネス分野における専門企業であるHealcomとの協力により、Mother Vegetableの健康機能性と医療応用の研究開発を推進しています。特に、栄養補助食品や機能性食品としての製品開発において、科学的エビデンスの構築に取り組んでいます。",
        EN: "Through cooperation with Healcom, a specialist company in healthcare and wellness, we are advancing research and development of the health functionality and medical applications of Mother Vegetable. In particular, we are working on building scientific evidence in product development as nutritional supplements and functional foods."
      }),
      image: "/healcom.jpeg"
    },
    {
      name: t({ JP: "黒井漁業協同組合", EN: "Kuroi Fishery Cooperative" }),
      description: t({
        JP: "日本の伝統的な漁業コミュニティである黒井漁業協同組合との協力により、Mother Vegetableを活用した持続可能な養殖技術の実証実験を行っています。地域の漁業者との協働により、環境に優しい養殖モデルの確立を目指しています。",
        EN: "Through cooperation with Kuroi Fishery Cooperative, a traditional fishing community in Japan, we are conducting demonstration experiments of sustainable aquaculture technology utilizing Mother Vegetable. Through collaboration with local fishermen, we aim to establish environmentally friendly aquaculture models."
      }),
      image: "/kuroi-fishery-DSW6ddl8.jpeg"
    },
    {
      name: "PTA",
      description: t({
        JP: "プランテーション技術協会（PTA）との協力により、大規模農業における持続可能な生産技術の導入を推進しています。特に、プランテーション農業における環境負荷の低減と生産性の向上の両立を目指しています。",
        EN: "Through cooperation with the Plantation Technology Association (PTA), we are promoting the introduction of sustainable production technologies in large-scale agriculture. In particular, we aim to achieve both reduction of environmental impact and improvement of productivity in plantation agriculture."
      }),
      image: "/pta.jpeg"
    },
    {
      name: "Leon",
      description: t({
        JP: "食品加工と流通の専門企業であるLeonとの提携により、Mother Vegetable製品のサプライチェーン最適化と市場展開を推進しています。品質管理と物流効率化により、消費者に新鮮で高品質な製品を届けることを実現しています。",
        EN: "Through partnership with Leon, a specialist company in food processing and distribution, we are promoting supply chain optimization and market deployment of Mother Vegetable products. Through quality control and logistics efficiency, we are delivering fresh and high-quality products to consumers."
      }),
      image: "/leon.jpeg"
    },
    {
      name: t({ JP: "九州電力", EN: "Kyushu Electric Power" }),
      description: t({
        JP: "日本の大手電力会社である九州電力との協力により、Mother Vegetable生産施設におけるエネルギー効率化と再生可能エネルギーの導入を推進しています。ゼロエミッション生産システムの実現に向けて、技術開発と実証実験を共同で進めています。",
        EN: "Through cooperation with Kyushu Electric Power, a major Japanese electric power company, we are promoting energy efficiency and introduction of renewable energy in Mother Vegetable production facilities. We are jointly advancing technology development and demonstration experiments toward the realization of zero-emission production systems."
      }),
      image: "/Kyushudenko.jpeg"
    },
    {
      name: "SFC",
      description: t({
        JP: "持続可能な食料システムの構築を目指すSFCとの協力により、Mother Vegetableを核とした循環型食料生産モデルの開発を推進しています。食品廃棄物の削減と資源循環の促進により、環境負荷の低い食料システムの実現を目指しています。",
        EN: "Through cooperation with SFC, which aims to build sustainable food systems, we are promoting the development of a circular food production model centered on Mother Vegetable. We aim to realize a food system with low environmental impact by reducing food waste and promoting resource circulation."
      }),
      image: "/sfc.jpeg"
    },
    {
      name: t({ JP: "明治大学", EN: "Meiji University" }),
      description: t({
        JP: "体育会競技者に対してMother Vegetable関連製品を提供するスポンサーシップ協力により、持続可能な栄養ソリューションを通じたスポーツパフォーマンスの支援を実施しています。",
        EN: "Supporting sports performance through sustainable nutrition solutions via sponsorship cooperation providing Mother Vegetable-related products to athletic competitors."
      }),
      image: "/Meiji-C7G7ovOM.jpeg"
    }
  ]

  const AccordionSection = ({ 
    title, 
    sectionId, 
    color, 
    partners 
  }: { 
    title: string; 
    sectionId: string; 
    color: string; 
    partners: any[] 
  }) => {
    const isOpen = openSection === sectionId

    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionId)}
          className={`w-full flex items-center justify-between p-6 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl hover:border-${color}-500/50 transition-all duration-300`}
        >
          <h3 className={`text-2xl font-bold text-${color}-400`}>{title}</h3>
          <svg
            className={`w-6 h-6 text-${color}-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => {
              const CardContent = (
                <>
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain p-4 drop-shadow-md"
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 160px, 160px"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                  {partner.subtitle && (
                    <p className={`text-${color}-400 text-sm font-semibold mb-3`}>{partner.subtitle}</p>
                  )}
                  {partner.description && (
                    <p className="text-gray-300 text-xs leading-[1.8]">{partner.description}</p>
                  )}
                </>
              )

              return (partner as Partner).url ? (
                <a
                  key={index}
                  href={(partner as Partner).url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-${color}-500/50 transition-all duration-300 hover:scale-105 block cursor-pointer`}
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-${color}-500/50 transition-all duration-300 hover:scale-105`}
                >
                  {CardContent}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t({ JP: 'パートナーシップ', EN: 'Partnerships' })}
          </h2>
        </div>

        {/* Accordion Sections */}
        <div className="max-w-6xl mx-auto">
          <AccordionSection
            title={t({ JP: '政府・公的機関・地域パートナー', EN: 'Government, Public Institutions & Regional Partners' })}
            sectionId="government"
            color="blue"
            partners={governmentPartners}
          />

          <AccordionSection
            title={t({ JP: '学術・研究機関', EN: 'Academic & Research Institutions' })}
            sectionId="university"
            color="cyan"
            partners={universityPartners}
          />

          <AccordionSection
            title={t({ JP: '行政・地方自治体', EN: 'Administration & Local Governments' })}
            sectionId="japanese"
            color="green"
            partners={japaneseAuthorities}
          />

          <AccordionSection
            title={t({ JP: '国際機関', EN: 'International Organizations' })}
            sectionId="international"
            color="purple"
            partners={internationalOrganizations}
          />

          <AccordionSection
            title={t({ JP: 'その他の提携組織・プロジェクト', EN: 'Other Partner Organizations & Projects' })}
            sectionId="other"
            color="orange"
            partners={otherPartners}
          />
        </div>
      </div>
    </section>
  )
}
