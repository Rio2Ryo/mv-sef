'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

const NewSectionsBentoWithMedia = () => {
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
        items: [
          { label: '最低投資額', value: '約15億円', note: '（未定）' },
          { label: '年間CO2吸収価値', value: '約77万USD', note: '（未定）' },
          { label: '追加収益', value: '食品・美容・水産素材', note: '' },
          { label: 'IRR', value: '12年', note: '（未定）' },
        ],
      },
      section4: {
        title: '出資プロセス — 申し込みから開始まで',
        steps: [
          { number: 1, title: '説明会申し込み', text: 'オンライン申し込みフォームから参加登録' },
          { number: 2, title: '説明会参加', text: 'プロジェクト詳細と投資条件の説明を受ける' },
          { number: 3, title: '契約', text: '投資契約書の締結' },
          { number: 4, title: '入金', text: '指定口座への投資金の振込' },
        ],
        closing: '地球再生の最前線に立つ投資家に',
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
        mission: 'The mission of Mother Vegetable is to restore the Earth to its original state and solve all problems.',
      },
      section1: {
        title: '3.5 Billion Years Ago, Earth Was a Red Planet',
        bullets: ['Full of CO2', 'Reddish-brown seas and land', 'Intense ultraviolet radiation'],
        text1: 'In the past, Earth was a red planet where life could not be born.',
        subtitle: 'Mother Vegetable Made This Planet the "Mother of Life"',
        description: [
          'The first life form born in the depths of the ancient Earth\'s oceans. That was Mother Vegetable.',
          'Mother Vegetable gained the power of photosynthesis through evolution, absorbing CO2 and producing O2, transforming Earth into the "Mother of Life".',
          'Some organisms could no longer live on a planet filled with oxygen.',
          'The "beautiful Earth" that people imagine today was a world created by Mother Vegetable.',
        ],
      },
      section1_5: {
        title: 'It\'s Time to Borrow the Power of Mother Vegetable Again to Restore Earth to Its Beautiful Form',
        text1: 'After the Industrial Revolution, coal and oil that should have been deep underground were excavated, and in exchange for people\'s prosperity, much CO2 overflowed into the atmosphere.',
        co2Table: [
          { year: '1000 AD', ppm: '270ppm' },
          { year: '1800 AD', ppm: '280ppm' },
          { year: '2026 AD', ppm: '420ppm' },
          { year: '2100 AD', ppm: '700ppm' },
        ],
        text2: 'Through human activities, heavy metals and microplastics were generated and flowed into the seas and rivers.',
        text3: 'Just as Mother Vegetable once transformed the red planet into a green, life-giving planet, now it\'s time for us to borrow the power of Mother Vegetable again.',
      },
      section1_6: {
        title: 'Small Earth Factory (SEF) Revives the Power of Mother Vegetable in Modern Times',
        threeZeros: ['No Emission', 'No Chemical', 'No Waste'],
        text1: 'The interior of Small Earth Factory is the "ancient Earth" itself where these were normal.',
        text2: 'The only space where the power of Mother Vegetable is maximized, supporting Earth\'s regeneration and people\'s health.',
        subtitle: 'Mother Vegetable and Fish Grow in the Same Environment as Ancient Earth',
        features: [
          'Completely sealed environment without heavy metals, microplastics, or pesticides',
          'Operates without using Earth\'s resources like oil or natural gas',
          'Absorbs CO2 700 times more than natural cedar and generates O2 as Mother Vegetable grows',
          'Completely organic nutritional food and pharmaceutical raw materials are produced',
          'Fish can also be farmed in water rich with Mother Vegetable',
        ],
        solutions: [
          {
            title: 'Addressing Global Warming by CO2 Absorption and Not Using Primary Energy',
            text: 'Carbon neutrality can be achieved by absorbing large amounts of CO2 in SEF that operates without using natural resources.',
          },
          {
            title: 'Achieving Complete Organic and Improving Health Damage from Chemicals',
            text: 'Organic healthy food and pharmaceuticals without any impurities can be created, fundamentally improving modern lifestyles affected by chemicals and additives.',
          },
          {
            title: 'Growing "Future Protein Source" Fish to Address Protein Crisis',
            text: 'While cattle and pigs are industries that emit enormous amounts of CO2, fish emit less CO2 and are a universal protein source that can be eaten in many religious cultures. Also, Mazavege Fish grown in SEF are completely unaffected by issues faced by modern fisheries such as declining catches, heavy metal contamination in farmed fish, and chemical-rich feed problems, making it possible to address the protein crisis. Pure and highly nutritious fish like ancient people ate, with zero heavy metals and zero microplastics, for you.',
          },
        ],
      },
      section2: {
        title: 'Can Be Built Anywhere',
        subtitle: 'Earn 72,000 USD/year in Carbon Credits from One Unit',
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
              'Fisheries cooperation model: Kawazu, Shizuoka / Kuroi, Yamaguchi',
            ],
          },
        },
      },
      section3: {
        title: 'No Management Required',
        subtitle: 'SEF Investment Recovery Scenario',
        items: [
          { label: 'Minimum Investment', value: 'Approx. 1.5 billion yen', note: '(TBD)' },
          { label: 'Annual CO2 Absorption Value', value: 'Approx. 770,000 USD', note: '(TBD)' },
          { label: 'Additional Revenue', value: 'Food, Beauty, Aquaculture Materials', note: '' },
          { label: 'IRR', value: '12 years', note: '(TBD)' },
        ],
      },
      section4: {
        title: 'Investment Process — From Application to Start',
        steps: [
          { number: 1, title: 'Apply for Briefing', text: 'Register via online application form' },
          { number: 2, title: 'Attend Briefing', text: 'Receive explanation of project details and investment terms' },
          { number: 3, title: 'Contract', text: 'Sign investment contract' },
          { number: 4, title: 'Payment', text: 'Transfer investment funds to designated account' },
        ],
        closing: 'Become an investor at the forefront of Earth regeneration',
      },
    },
  };

  const t = content[language as keyof typeof content] || content.ja;

  return (
    <div className="bg-black text-white">
      {/* Section 0: 我々が解決する3つのテーマ */}
      <section className="py-12 px-4 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-emerald-400">
            {t.section0.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {t.section0.themes.map((theme, index) => {
              const themeImages = [
                '/media/theme-global-warming.png',
                '/media/theme-chemical-health.png',
                '/media/theme-protein-crisis.png',
              ];
              return (
                <div
                  key={index}
                  className="border-2 border-emerald-500/30 rounded-lg overflow-hidden bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] md:h-64">
                    <Image
                      src={themeImages[index]}
                      alt={theme}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-400 mb-2 md:mb-4">{index + 1}</div>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">{theme}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-400 font-semibold px-4 leading-relaxed">{t.section0.mission}</p>
          </div>
        </div>
      </section>

      {/* Section 1: 35億年前、地球は赤い星だった */}
      <section className="py-12 px-4 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-emerald-500/30 rounded-lg p-6 md:p-8 lg:p-12 bg-black/50 hover:border-emerald-500/60 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-red-500">
              {t.section1.title}
            </h2>

            {/* 古代地球の画像 */}
            <div className="mb-6 md:mb-8 rounded-lg overflow-hidden">
              <Image
                src="/media/ancient-earth-red.png"
                alt="Ancient Earth"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
              {t.section1.bullets.map((bullet, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 md:px-4 md:py-2 border border-red-500/50 rounded-full text-red-400 text-xs md:text-sm"
                >
                  • {bullet}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed">{t.section1.text1}</p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-emerald-400">{t.section1.subtitle}</h3>

            {t.section1.description.map((para, index) => (
              <p key={index} className="text-sm md:text-base lg:text-lg text-white/80 mb-3 md:mb-4 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1.5: 地球を美しい姿へと戻すため */}
      <section className="py-12 px-4 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-emerald-500/30 rounded-lg p-6 md:p-8 lg:p-12 bg-black/50 hover:border-emerald-500/60 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-emerald-400">
              {t.section1_5.title}
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed">{t.section1_5.text1}</p>

            {/* CO2濃度表 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {t.section1_5.co2Table.map((item, index) => (
                <div
                  key={index}
                  className="border border-emerald-500/30 rounded-lg p-4 md:p-6 bg-black/30 text-center"
                >
                  <div className="text-xs md:text-sm text-white/60 mb-1 md:mb-2">{item.year}</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-400">{item.ppm}</div>
                </div>
              ))}
            </div>

            {/* CO2吸収コンセプト画像 */}
            <div className="mb-6 md:mb-8 rounded-lg overflow-hidden">
              <Image
                src="/media/co2-absorption-concept.png"
                alt="CO2 Absorption Concept"
                width={800}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-3 md:mb-4 leading-relaxed">{t.section1_5.text2}</p>
            <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">{t.section1_5.text3}</p>
          </div>
        </div>
      </section>

      {/* Section 1.6: Small Earth Factory（SEF） */}
      <section className="py-12 px-4 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-emerald-400">
            {t.section1_6.title}
          </h2>

          {/* SEF外観画像 */}
          <div className="mb-8 md:mb-12 rounded-lg overflow-hidden">
            <Image
              src="/media/sef-exterior.png"
              alt="SEF Exterior"
              width={900}
              height={450}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* 3つのゼロ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {t.section1_6.threeZeros.map((zero, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-4 md:p-6 lg:p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300 text-center"
              >
                <div className="text-base md:text-lg lg:text-2xl font-bold text-emerald-400">{zero}</div>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base lg:text-lg text-white/80 mb-3 md:mb-4 text-center leading-relaxed px-4">{t.section1_6.text1}</p>
          <p className="text-sm md:text-base lg:text-lg text-white/80 mb-8 md:mb-12 text-center leading-relaxed px-4">{t.section1_6.text2}</p>


          {/* SEF内部構造の動画 */}
          <div className="mb-8 md:mb-12 rounded-lg overflow-hidden">
            <video
              controls
              className="w-full h-auto rounded-xl"
              poster="/media/sef-interior.png"
            >
              <source src="/media/sef-structure.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-emerald-400">{t.section1_6.subtitle}</h3>

          {/* SEF内部培養画像 */}
          <div className="mb-8 md:mb-12 rounded-lg overflow-hidden">
            <Image
              src="/media/sef-cultivation-interior.png"
              alt="SEF Interior Cultivation"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="border-2 border-emerald-500/30 rounded-lg p-4 md:p-6 lg:p-8 bg-black/50 mb-8 md:mb-12">
            <ul className="space-y-3 md:space-y-4">
              {t.section1_6.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-400 mr-2 md:mr-3 text-sm md:text-base">✓</span>
                  <span className="text-white/80 text-sm md:text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SEFが解決できること */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {t.section1_6.solutions.map((solution, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-4 md:p-6 lg:p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-3 md:mb-4">{solution.title}</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: どこでも建設可能 */}
      <section className="py-12 px-4 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-emerald-400">
            {t.section2.title}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-white/90 px-4">
            {t.section2.subtitle}
          </h3>

          <div className="border-2 border-emerald-500/30 rounded-lg p-6 md:p-8 lg:p-12 bg-black/50 mb-8 md:mb-12">
            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-4 md:mb-6 leading-relaxed">{t.section2.text1}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {t.section2.stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-emerald-500/30 rounded-lg p-4 md:p-6 bg-black/30 text-center"
                >
                  <p className="text-sm md:text-base lg:text-lg text-emerald-400">{stat}</p>
                </div>
              ))}
            </div>

            {/* SEF培養システム画像 */}
            <div className="mb-6 md:mb-8 rounded-lg overflow-hidden max-w-3xl mx-auto">
              <Image
                src="/media/sef-cultivation-system-wide.png"
                alt="SEF Cultivation System"
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 md:mb-6">
              {language === 'JP' ? 'SEFで作られた Mother Vegetable' : 'Mother Vegetable Made in SEF'}
            </h4>

            {/* Mother Vegetable製品画像 */}
            <div className="mb-6 md:mb-8 rounded-lg overflow-hidden">
              <Image
                src="/media/mother-vegetable-products.png"
                alt="Mother Vegetable Products"
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {t.section2.industries.map((industry, index) => (
                <div
                  key={index}
                  className="border border-emerald-500/30 rounded-lg p-3 md:p-4 bg-black/30 text-center text-xs md:text-sm text-white/80"
                >
                  {industry}
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg md:text-xl text-emerald-400 font-semibold text-center leading-relaxed px-4">
              {t.section2.doubleIncome}
            </p>
          </div>

          {/* 世界へ広がるSEF */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-emerald-400 text-center">
            {language === 'JP' ? '世界へ広がるSEF' : 'SEF Expanding Globally'}
          </h3>

          {/* グローバルネットワーク画像 */}
          <div className="mb-8 md:mb-12 rounded-lg overflow-hidden">
            <Image
              src="/media/global-sef-network.png"
              alt="Global SEF Network"
              width={800}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="border-2 border-emerald-500/30 rounded-lg p-4 md:p-6 lg:p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 mb-3 md:mb-4">
                {t.section2.locations.malaysia.title}
              </h4>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">{t.section2.locations.malaysia.text}</p>
            </div>

            <div className="border-2 border-emerald-500/30 rounded-lg p-4 md:p-6 lg:p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 mb-3 md:mb-4">
                {t.section2.locations.japan.title}
              </h4>
              <ul className="space-y-2">
                {t.section2.locations.japan.items.map((item, index) => (
                  <li key={index} className="text-white/80 text-sm md:text-base">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: あなたは管理不要 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-emerald-400">
            {t.section3.title}
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-white/90">
            {t.section3.subtitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.section3.items.map((item, index) => (
              <div
                key={index}
                className="border-2 border-emerald-500/30 rounded-lg p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="text-sm text-white/60 mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-emerald-400">
                  {item.value}
                  {item.note && <span className="text-lg text-white/60 ml-2">{item.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 出資プロセス */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
            {t.section4.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.section4.steps.map((step) => (
              <div
                key={step.number}
                className="border-2 border-emerald-500/30 rounded-lg p-8 bg-black/50 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border-2 border-emerald-400 flex items-center justify-center text-3xl font-bold text-emerald-400 mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-white/80 text-center">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl text-emerald-400 font-semibold">{t.section4.closing}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSectionsBentoWithMedia;
