'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const NewSectionsBento = () => {
  const { language } = useLanguage();

  const content = {
    ja: {
      section0: {
        title: '我々が解決する3つのテーマ',
        themes: [
          '資源乱用による地球温暖化問題',
          'ケミカルによる人々の健康悪化',
          '人口爆発によるプロテインクライシス',
        ],
        mission: 'Mother Vegetableの使命は 地球を本来の姿に戻し、あらゆる問題を解決すること。',
      },
      section1: {
        title: '35億年前、地球は赤い星だった',
        bullets: ['CO2だらけ', '海も陸も赤茶色', '強い紫外線が降り注ぐ'],
        text1: 'かつての地球は、生命が生まれることは不可能な赤い星だった。',
        subtitle: 'Mother Vegetableがこの星を「生命の母」にした',
        description: [
          'そんな古代地球の海の深くで生まれた最初の生命体。それがMother Vegetable。',
          'Mother Vegetableは進化の過程で光合成の力を手に入れ、CO2を吸い、O2を生み出せるようになり、地球を「生命の母」に変えた存在。',
          '酸素で満たされはじめた星には住めなくなった生物もいた。',
          'いま人々が「美しい地球」として想像する姿は、Mother Vegetableが生み出した世界だった。',
        ],
      },
      section1_5: {
        title: '地球を美しい姿へと戻すため、再びMother Vegetableの力を借りる時が来た',
        text1: '産業革命後、本来地中深くにあるはずだった石炭・石油が掘り起こされ、人々の生活の豊かさと引き換えに、大気中には多くのCO2が溢れ出た。',
        co2Table: [
          { year: '1000年', ppm: '270ppm' },
          { year: '1800年', ppm: '280ppm' },
          { year: '2026年', ppm: '420ppm' },
          { year: '2100年', ppm: '700ppm' },
        ],
        text2: '人類の活動の中で、重金属やマイクロプラスチックが生成され、海や川に流れてしまった。',
        text3: 'かつて、Mother Vegetableが、赤い星を、緑あふれる母なる星へと生まれ変わらせたように、いま再び私たちは、その Mother Vegetableの力を借りる時が来た。',
      },
      section1_6: {
        title: 'Mother Vegetableの力を現代に蘇らせる Small Earth Factory（SEF）',
        threeZeros: ['No Emission（排出ゼロ）', 'No Chemical（化学物質ゼロ）', 'No Waste（廃棄物ゼロ）'],
        text1: 'Small Earth Factoryの内部はこれらが当たり前だった「古代地球」そのもの。',
        text2: 'Mother Vegetableの力が最大限発揮される唯一の空間で、地球の再生と人々の健康を支えます。',
        subtitle: '古代地球と同じ環境でMother Vegetableや魚が育つ',
        features: [
          '完全密閉環境で、重金属やマイクロプラスチック、農薬のない空間',
          '石油や天然ガスなどの地球の資源を使わずに稼働',
          'Mother Vegetableが育つ過程で天然杉700倍のCO2を吸収しO2を生成',
          '完全オーガニックな畜栄養食品や医薬品原料が作られる',
          'Mother Vegetableが豊富な水の中で魚も養殖可能',
        ],
        solutions: [
          {
            title: 'CO2吸収と一次エネルギーを使用しないことで温暖化に対処',
            text: '天然資源を使用せずに稼働するSEFで、CO2が多く吸収されることでカーボンニュートラルの達成が可能。',
          },
          {
            title: '完全オーガニックを実現し、ケミカルによる健康被害を改善',
            text: '不純物が一切入らないオーガニックの健康食や医薬品の作成ができ、ケミカルや添加物に犯された現代のライフスタイルを根本から改善。',
          },
          {
            title: '「未来のタンパク源」の魚を育て、プロテインクライシスに対応',
            text: '牛や豚は莫大なCO2を排出する産業である一方、魚はCO2排出が少なく、多くの宗教文化でも食べられる普遍的なタンパク源。また、現代の漁業が抱える漁獲高の減少や、養殖魚への重金属の混入、ケミカル豊富なエサ問題も、SEF内で育つマザベジフィッシュなら、一切影響を受けず、プロテインクライシスに対応が可能。重金属ゼロ・マイクロプラゼロの、古代人が食べていたような、純粋で栄養価の高い魚をあなたに。',
          },
        ],
      },
      section2: {
        title: 'どこでも建設可能',
        subtitle: '1ユニットから72,000USD/年のカーボンクレジットを獲得',
        text1: 'SEFが吸収したCO2は、国際基準でカーボンクレジット化でき、その価値は市場で取引が可能。',
        stats: ['SEF 1ユニットの吸収量：年間約2,800トン', '年間収益：約72,000 USD 相当'],
        industries: [
          'Food Sector/食品分野',
          'Pharmaceutical Sector/医薬品分野',
          'Industrial Products/産業製品分野',
          'Aquaculture Sector/水産養殖分野',
          'Agriculture Sector/農業分野',
          'Biomass Sector/バイオマス分野',
          'Energy Sector/エネルギー分野',
          'FMCG Sector/日用品（FMCG）分野',
        ],
        doubleIncome: 'カーボンクレジットのよる利益と、商業化済みのMother Vegetableの売り上げによる、ダブルインカムが実現。',
        locations: {
          malaysia: {
            title: 'マレーシア',
            text: 'KLから2時間圏で40haの土地にて一区画が建築完了',
          },
          japan: {
            title: '日本',
            items: [
              '首都モデル：東京・新宿が候補地に',
              '寒冷域モデル：北海道',
              '漁協連携モデル：静岡県 河津、山口県 黒井',
            ],
          },
        },
      },
      section3: {
        title: 'あなたは管理不要',
        subtitle: 'SEFの投資回収シナリオ',
        cards: [
          { title: '最低投資額', value: '約15億円', note: '（未定）' },
          { title: '年間CO2吸収価値', value: '約77万USD', note: '（未定）' },
          { title: '追加収益', value: '食品・美容・水産素材', note: '' },
          { title: 'IRR（投資回収期間）', value: '12年', note: '（未定）' },
        ],
      },
      section4: {
        title: '出資プロセス',
        subtitle: '申し込みから開始まで',
        steps: [
          { number: 1, title: '1対1説明会 申し込み' },
          { number: 2, title: '説明会のご参加' },
          { number: 3, title: '電子契約書による契約' },
          { number: 4, title: 'ご入金' },
        ],
        closing: [
          'CO2を吸収しながら地球と人々の生活を豊かにする、世界で初めてのプロジェクト。',
          '地球再生の最前線に立つ投資家に。',
        ],
      },
    },
    en: {
      section0: {
        title: 'Three Themes We Solve',
        themes: [
          'Global warming due to resource abuse',
          'Health deterioration due to chemicals',
          'Protein crisis due to population explosion',
        ],
        mission: "Mother Vegetable's mission is to restore the Earth to its original state and solve all problems.",
      },
      section1: {
        title: '3.5 Billion Years Ago, Earth Was a Red Planet',
        bullets: ['Full of CO2', 'Oceans and land were reddish-brown', 'Strong UV radiation'],
        text1: 'In the past, Earth was a red planet where life could not exist.',
        subtitle: 'Mother Vegetable Made This Planet the "Mother of Life"',
        description: [
          'The first life form born in the depths of the ancient ocean. That was Mother Vegetable.',
          'Mother Vegetable acquired the power of photosynthesis through evolution, absorbing CO2 and producing O2, transforming Earth into the "Mother of Life."',
          'Some organisms could no longer live on a planet filled with oxygen.',
          'The "beautiful Earth" that people imagine today was the world created by Mother Vegetable.',
        ],
      },
      section1_5: {
        title: 'The Time Has Come to Borrow the Power of Mother Vegetable Again',
        text1: 'After the Industrial Revolution, coal and oil that should have been deep underground were excavated, and in exchange for enriching people\'s lives, much CO2 overflowed into the atmosphere.',
        co2Table: [
          { year: '1000', ppm: '270ppm' },
          { year: '1800', ppm: '280ppm' },
          { year: '2026', ppm: '420ppm' },
          { year: '2100', ppm: '700ppm' },
        ],
        text2: 'Through human activities, heavy metals and microplastics were generated and flowed into the oceans and rivers.',
        text3: 'Just as Mother Vegetable once transformed the red planet into a green mother planet, the time has come for us to borrow the power of Mother Vegetable again.',
      },
      section1_6: {
        title: 'Small Earth Factory (SEF) Reviving the Power of Mother Vegetable',
        threeZeros: ['No Emission', 'No Chemical', 'No Waste'],
        text1: 'The interior of Small Earth Factory is the "ancient Earth" itself where these were natural.',
        text2: 'The only space where Mother Vegetable\'s power is maximized, supporting Earth\'s regeneration and people\'s health.',
        subtitle: 'Mother Vegetable and Fish Grow in the Same Environment as Ancient Earth',
        features: [
          'Completely sealed environment free from heavy metals, microplastics, and pesticides',
          'Operates without using Earth\'s resources such as oil and natural gas',
          'Absorbs 700 times more CO2 than natural cedar and generates O2 as Mother Vegetable grows',
          'Completely organic nutritional foods and pharmaceutical ingredients are produced',
          'Fish can also be farmed in water rich with Mother Vegetable',
        ],
        solutions: [
          {
            title: 'Addressing Global Warming by Absorbing CO2 Without Using Primary Energy',
            text: 'SEF operates without using natural resources, absorbing large amounts of CO2, making carbon neutrality achievable.',
          },
          {
            title: 'Achieving Complete Organic and Improving Health Damage from Chemicals',
            text: 'Completely organic health foods and pharmaceuticals can be created without any impurities, fundamentally improving modern lifestyles affected by chemicals and additives.',
          },
          {
            title: 'Raising "Future Protein Source" Fish to Address Protein Crisis',
            text: 'While cattle and pigs are industries that emit massive amounts of CO2, fish emit less CO2 and are a universal protein source that can be eaten in many religious cultures. Also, the problems of declining catches in modern fisheries, heavy metal contamination in farmed fish, and chemical-rich feed are not affected at all by Mazavege Fish grown in SEF, making it possible to address the protein crisis. Pure, nutrient-rich fish like those eaten by ancient people, with zero heavy metals and zero microplastics.',
          },
        ],
      },
      section2: {
        title: 'Can Be Built Anywhere',
        subtitle: 'Earn 72,000 USD/year in Carbon Credits from 1 Unit',
        text1: 'CO2 absorbed by SEF can be converted into carbon credits according to international standards, and its value can be traded in the market.',
        stats: ['SEF 1 unit absorption: approximately 2,800 tons per year', 'Annual revenue: approximately 72,000 USD equivalent'],
        industries: [
          'Food Sector',
          'Pharmaceutical Sector',
          'Industrial Products',
          'Aquaculture Sector',
          'Agriculture Sector',
          'Biomass Sector',
          'Energy Sector',
          'FMCG Sector',
        ],
        doubleIncome: 'Double income is realized through profits from carbon credits and sales of commercialized Mother Vegetable.',
        locations: {
          malaysia: {
            title: 'Malaysia',
            text: 'One section completed on 40ha of land within 2 hours from KL',
          },
          japan: {
            title: 'Japan',
            items: [
              'Capital model: Tokyo/Shinjuku as candidate site',
              'Cold region model: Hokkaido',
              'Fisheries cooperation model: Kawazu, Shizuoka; Kuroi, Yamaguchi',
            ],
          },
        },
      },
      section3: {
        title: 'No Management Required',
        subtitle: 'SEF Investment Recovery Scenario',
        cards: [
          { title: 'Minimum Investment', value: 'Approx. 1.5 billion yen', note: '(TBD)' },
          { title: 'Annual CO2 Absorption Value', value: 'Approx. 770,000 USD', note: '(TBD)' },
          { title: 'Additional Revenue', value: 'Food, Beauty, Aquaculture Materials', note: '' },
          { title: 'IRR (Investment Recovery Period)', value: '12 years', note: '(TBD)' },
        ],
      },
      section4: {
        title: 'Investment Process',
        subtitle: 'From Application to Start',
        steps: [
          { number: 1, title: 'Apply for 1-on-1 Briefing' },
          { number: 2, title: 'Attend Briefing' },
          { number: 3, title: 'Contract via Electronic Agreement' },
          { number: 4, title: 'Payment' },
        ],
        closing: [
          'The world\'s first project that enriches the Earth and people\'s lives while absorbing CO2.',
          'To investors at the forefront of Earth regeneration.',
        ],
      },
    },
  };

  const t = content[language as keyof typeof content] || content.ja;

  return (
    <div className="bg-black text-white">
      {/* Section 0: 我々が解決する3つのテーマ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-16">
            {t.section0.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.section0.themes.map((theme, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 hover:border-emerald-500/60 transition-all duration-300 bg-black/50"
              >
                <div className="text-emerald-400 text-6xl font-bold mb-4">{index + 1}</div>
                <p className="text-lg text-white/90">{theme}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-emerald-400 font-bold">{t.section0.mission}</p>
          </div>
        </div>
      </section>

      {/* Section 1: 35億年前、地球は赤い星だった */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-emerald-500/30 rounded-lg p-12 bg-black/50">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-8">{t.section1.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {t.section1.bullets.map((bullet, index) => (
                <div key={index} className="text-lg text-white/80">
                  • {bullet}
                </div>
              ))}
            </div>
            <p className="text-xl text-white/90 mb-12">{t.section1.text1}</p>
            
            <h3 className="text-3xl font-bold text-emerald-400 mb-6">{t.section1.subtitle}</h3>
            <div className="space-y-4">
              {t.section1.description.map((text, index) => (
                <p key={index} className="text-lg text-white/80 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.5: 地球を美しい姿へと戻すため */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-emerald-500/30 rounded-lg p-12 bg-black/50">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 whitespace-pre-line">
              {t.section1_5.title}
            </h2>
            <p className="text-lg text-white/80 mb-8">{t.section1_5.text1}</p>
            
            <div className="border-2 border-emerald-500/30 rounded-lg p-8 mb-8 bg-black/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">CO2濃度の推移</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.section1_5.co2Table.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white/60 mb-2">{item.year}</div>
                    <div className="text-2xl font-bold text-red-400">{item.ppm}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-white/80 mb-6">{t.section1_5.text2}</p>
            <p className="text-xl text-emerald-400 font-bold">{t.section1_5.text3}</p>
          </div>
        </div>
      </section>

      {/* Section 1.6: Small Earth Factory */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-12 text-center whitespace-pre-line">
            {t.section1_6.title}
          </h2>
          
          {/* 3つのゼロ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.section1_6.threeZeros.map((zero, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 text-center bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-emerald-400">{zero}</p>
              </div>
            ))}
          </div>
          
          <div className="border-2 border-emerald-500/30 rounded-lg p-12 mb-12 bg-black/50">
            <p className="text-lg text-white/80 mb-4">{t.section1_6.text1}</p>
            <p className="text-lg text-white/80 mb-8">{t.section1_6.text2}</p>
            
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">{t.section1_6.subtitle}</h3>
            <div className="space-y-3">
              {t.section1_6.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-emerald-400 mr-3">●</span>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* SEFが解決できること */}
          <h3 className="text-3xl font-bold text-emerald-400 mb-8 text-center">SEFが解決できること</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.section1_6.solutions.map((solution, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="text-emerald-400 text-4xl font-bold mb-4">{index + 1}</div>
                <h4 className="text-xl font-bold text-emerald-400 mb-4">{solution.title}</h4>
                <p className="text-white/80 leading-relaxed">{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: どこでも建設可能 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-8 text-center">
            {t.section2.title}
          </h2>
          <p className="text-2xl text-center text-emerald-400/80 mb-12 whitespace-pre-line">
            {t.section2.subtitle}
          </p>
          
          <div className="border-2 border-emerald-500/30 rounded-lg p-12 mb-12 bg-black/50">
            <p className="text-lg text-white/80 mb-6">{t.section2.text1}</p>
            <div className="space-y-2 mb-8">
              {t.section2.stats.map((stat, index) => (
                <p key={index} className="text-xl text-emerald-400">→ {stat}</p>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              SEFで作られた Mother Vegetableは、8つの産業の原料を作成
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {t.section2.industries.map((industry, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-emerald-400 mr-3">●</span>
                  <span className="text-white/80">{industry}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-emerald-400 font-bold">{t.section2.doubleIncome}</p>
          </div>
          
          {/* 世界へ広がるSEF */}
          <h3 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
            世界へ広がるSEFと設置候補地
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-emerald-500/30 rounded-lg p-8 bg-black/50">
              <h4 className="text-2xl font-bold text-emerald-400 mb-4">
                {t.section2.locations.malaysia.title}
              </h4>
              <p className="text-white/80">{t.section2.locations.malaysia.text}</p>
            </div>
            <div className="border-2 border-emerald-500/30 rounded-lg p-8 bg-black/50">
              <h4 className="text-2xl font-bold text-emerald-400 mb-4">
                {t.section2.locations.japan.title}
              </h4>
              <div className="space-y-2">
                {t.section2.locations.japan.items.map((item, index) => (
                  <p key={index} className="text-white/80">• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: あなたは管理不要 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 text-center">
            {t.section3.title}
          </h2>
          <p className="text-2xl text-center text-emerald-400/80 mb-12">{t.section3.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.section3.cards.map((card, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 text-center bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <h3 className="text-lg text-emerald-400 mb-4">{card.title}</h3>
                <p className="text-2xl font-bold text-white mb-2">{card.value}</p>
                {card.note && <p className="text-sm text-white/60">{card.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 出資プロセス */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 text-center">
            {t.section4.title}
          </h2>
          <p className="text-2xl text-center text-emerald-400/80 mb-12">{t.section4.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.section4.steps.map((step, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 text-center bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-emerald-400">{step.number}</span>
                </div>
                <p className="text-lg text-white">{step.title}</p>
              </div>
            ))}
          </div>
          
          <div className="border-2 border-emerald-500/30 rounded-lg p-12 text-center bg-black/50">
            {t.section4.closing.map((text, index) => (
              <p key={index} className="text-xl text-emerald-400 mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSectionsBento;
