'use client';

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const NewSectionsComplete = () => {
  const { language } = useLanguage();

  const content = {
    ja: {
      // セクション0: 我々が解決する3つのテーマ
      section0: {
        title: '我々が解決する3つのテーマ',
        themes: [
          '1. 資源乱用による地球温暖化問題',
          '2. ケミカルによる人々の健康悪化',
          '3. 人口爆発によるプロテインクライシス',
        ],
        mission: 'Mother Vegetableの使命は 地球を本来の姿に戻し、あらゆる問題を解決すること。',
      },
      // セクション1: 35億年前、地球は赤い星だった
      section1: {
        title: '35億年前、地球は赤い星だった',
        bullets: [
          '・CO2だらけ',
          '・海も陸も赤茶色',
          '・強い紫外線が降り注ぐ',
        ],
        text1: 'かつての地球は、生命が生まれることは不可能な赤い星だった。',
        subtitle: 'Mother Vegetableがこの星を「生命の母」にした',
        text2: 'そんな古代地球の海の深くで生まれた最初の生命体。\nそれがMother Vegetable。',
        text3: 'Mother Vegetableは進化の過程で光合成の力を手に入れ、\nCO2を吸い、O2を生み出せるようになり、\n地球を「生命の母」に変えた存在。',
        text4: '酸素で満たされはじめた星には\n住めなくなった生物もいた。',
        text5: 'いま人々が「美しい地球」として想像する姿は、\nMother Vegetableが生み出した世界だった。',
        note: '（メモ：Mazavegeから生み出されたO2は、大気圏まで上昇することでオゾンO3になり、それが地球から紫外線を守るようになった）',
      },
      // セクション1.5: Mother Vegetableが必要な理由
      section1_5: {
        title: '地球を美しい姿へと戻すため、\n再びMother Vegetableの力を借りる時が来た',
        text1: '産業革命後、本来地中深くにあるはずだった石炭・石油が掘り起こされ、\n人々の生活の豊かさと引き換えに、大気中には多くのCO2が溢れ出た。',
        co2Table: {
          title: 'CO2濃度',
          data: [
            { year: '1000年', ppm: '270ppm' },
            { year: '1800年', ppm: '280ppm' },
            { year: '2026年', ppm: '420ppm' },
            { year: '2100年', ppm: '700ppm' },
          ],
        },
        text2: '人類の活動の中で、重金属やマイクロプラスチックが生成され、\n海や川に流れてしまった。',
        text3: 'かつて、Mother Vegetableが、\n赤い星を、緑あふれる母なる星へと生まれ変わらせたように、\nいま再び私たちは、その Mother Vegetableの力を借りる時が来た。',
      },
      // セクション1.6: Small Earth Factoryが必要な理由
      section1_6: {
        title: 'Mother Vegetableの力を現代に蘇らせる\nSmall Earth Factory（SEF）',
        threeZeros: [
          '・No Emission（排出ゼロ）',
          '・No Chemical（化学物質ゼロ）',
          '・No Waste（廃棄物ゼロ）',
        ],
        text1: 'Small Earth Factoryの内部は\nこれらが当たり前だった「古代地球」そのもの。',
        text2: 'Mother Vegetableの力が最大限発揮される唯一の空間で、\n地球の再生と人々の健康を支えます。',
        subtitle: '古代地球と同じ環境でMother Vegetableや魚が育つ',
        features: [
          '● 完全密閉環境で、重金属やマイクロプラスチック、農薬のない空間',
          '● 石油や天然ガスなどの地球の資源を使わずに稼働',
          '● Mother Vegetableが育つ過程で天然杉700倍のCO2を吸収しO2を生成',
          '● 完全オーガニックな畜栄養食品や医薬品原料が作られる',
          '● Mother Vegetableが豊富な水の中で魚も養殖可能',
        ],
        solutionsTitle: 'SEFが解決できること',
        solutions: [
          {
            title: '1. CO2吸収と一次エネルギーを使用しないことで温暖化に対処',
            text: '天然資源を使用せずに稼働するSEFで、\nCO2が多く吸収されることで\nカーボンニュートラルの達成が可能。',
          },
          {
            title: '2. 完全オーガニックを実現し、ケミカルによる健康被害を改善',
            text: '不純物が一切入らないオーガニックの健康食や医薬品の作成ができ、\nケミカルや添加物に犯された現代のライフスタイルを根本から改善。',
          },
          {
            title: '3. 「未来のタンパク源」の魚を育て、プロテインクライシスに対応',
            text: '牛や豚は莫大なCO2を排出する産業である一方、魚はCO2排出が少なく、\n多くの宗教文化でも食べられる普遍的なタンパク源。\n\nまた、現代の漁業が抱える漁獲高の減少や、\n養殖魚への重金属の混入、ケミカル豊富なエサ問題も、\nSEF内で育つマザベジフィッシュなら、\n一切影響を受けず、またるプロテインクライシスに対応が可能。\n\n重金属ゼロ・マイクロプラゼロの、古代人が食べていたような、\n純粋で栄養価の高い魚をあなたに。',
          },
        ],
      },
      // セクション2: どこでも建設可能
      section2: {
        title: 'どこでも建設可能',
        subtitle: '1ユニットから72,000USD/年の\nカーボンクレジットを獲得',
        text1: 'SEFが吸収したCO2は、\n国際基準でカーボンクレジット化でき、\nその価値は市場で取引が可能。',
        stats: [
          '→ SEF 1ユニットの吸収量：年間約2,800トン',
          '→ 年間収益：約72,000 USD 相当',
        ],
        industryTitle: 'SEFで作られた Mother Vegetableは、\n8つの産業の原料を作成',
        industries: [
          '● Food Sector/食品分野',
          '● Pharmaceutical Sector/医薬品分野',
          '● Industrial Products/産業製品分野',
          '● Aquaculture Sector/水産養殖分野',
          '● Agriculture Sector/農業分野',
          '● Biomass Sector/バイオマス分野',
          '● Energy Sector/エネルギー分野',
          '● FMCG Sector/日用品（FMCG）分野',
        ],
        doubleIncome: 'カーボンクレジットのよる利益と、\n商業化済みのMother Vegetableの売り上げによる、ダブルインカムが実現。',
        worldTitle: '世界へ広がるSEFと設置候補地',
        worldText: 'SEFは以下の地域で建築または候補地として進行しています。',
        locations: {
          malaysia: {
            title: 'マレーシア',
            text: 'KLから2時間圏で40haの土地にて一区画が建築完了',
          },
          japan: {
            title: '日本：',
            items: [
              '首都モデル：東京・新宿が候補地に',
              '寒冷域モデル：北海道',
              '漁協連携モデル：静岡県 河津、山口県 黒井',
            ],
          },
        },
      },
      // セクション3: あなたは管理不要
      section3: {
        title: 'あなたは管理不要',
        subtitle: 'SEFの投資回収シナリオ',
        cards: [
          { title: '最低投資額', value: '約15億円（未定）' },
          { title: '年間CO2吸収価値', value: '約77万USD（未定）' },
          { title: '追加収益', value: '食品・美容・水産素材としての追加収益' },
          { title: 'IRR（投資回収期間）', value: '12年（未定）' },
        ],
      },
      // セクション4: 出資プロセス
      section4: {
        title: '出資プロセス — 申し込みから開始まで',
        steps: [
          { number: '1', text: '● 1対1説明会 申し込み' },
          { number: '2', text: '● 説明会のご参加' },
          { number: '3', text: '● 電子契約書による契約' },
          { number: '4', text: '● ご入金' },
        ],
        closing1: 'CO2を吸収しながら地球と人々の生活を豊かにする、世界で初めてのプロジェクト。',
        closing2: '地球再生の最前線に立つ投資家に。',
      },
    },
    en: {
      // Section 0: Three Themes We Solve
      section0: {
        title: 'Three Themes We Solve',
        themes: [
          '1. Global warming caused by resource abuse',
          '2. Health deterioration caused by chemicals',
          '3. Protein crisis caused by population explosion',
        ],
        mission: 'The mission of Mother Vegetable is to restore the Earth to its original state and solve all problems.',
      },
      // Section 1
      section1: {
        title: '3.5 Billion Years Ago, Earth Was a Red Planet',
        bullets: [
          '・Full of CO2',
          '・Both ocean and land were reddish-brown',
          '・Strong ultraviolet rays poured down',
        ],
        text1: 'Once upon a time, Earth was a red planet where life could not be born.',
        subtitle: 'Mother Vegetable Made This Planet the "Mother of Life"',
        text2: 'The first life form born deep in the ocean of ancient Earth.\nThat is Mother Vegetable.',
        text3: 'Mother Vegetable gained the power of photosynthesis in the process of evolution,\nabsorbing CO2 and producing O2,\ntransforming Earth into the "Mother of Life".',
        text4: 'Some organisms could no longer live\non a planet that began to be filled with oxygen.',
        text5: 'The image that people now imagine as a "beautiful Earth"\nwas the world created by Mother Vegetable.',
        note: '(Note: O2 produced by Mazavege rises to the atmosphere and becomes ozone O3, which protects the Earth from ultraviolet rays)',
      },
      // Section 1.5
      section1_5: {
        title: 'To Return the Earth to Its Beautiful Form,\nThe Time Has Come to Borrow the Power of Mother Vegetable Again',
        text1: 'After the Industrial Revolution, coal and oil that should have been deep underground were dug up,\nand in exchange for the richness of people\'s lives, a lot of CO2 overflowed into the atmosphere.',
        co2Table: {
          title: 'CO2 Concentration',
          data: [
            { year: '1000', ppm: '270ppm' },
            { year: '1800', ppm: '280ppm' },
            { year: '2026', ppm: '420ppm' },
            { year: '2100', ppm: '700ppm' },
          ],
        },
        text2: 'In the course of human activities, heavy metals and microplastics were generated\nand flowed into the sea and rivers.',
        text3: 'Just as Mother Vegetable once transformed\nthe red planet into a green mother planet,\nthe time has come for us to borrow the power of Mother Vegetable again.',
      },
      // Section 1.6
      section1_6: {
        title: 'Reviving the Power of Mother Vegetable in Modern Times\nSmall Earth Factory (SEF)',
        threeZeros: [
          '・No Emission',
          '・No Chemical',
          '・No Waste',
        ],
        text1: 'The interior of Small Earth Factory is\nthe "ancient Earth" itself, where these were taken for granted.',
        text2: 'In the only space where the power of Mother Vegetable is maximized,\nit supports the regeneration of the Earth and people\'s health.',
        subtitle: 'Mother Vegetable and Fish Grow in the Same Environment as Ancient Earth',
        features: [
          '● Completely sealed environment with no heavy metals, microplastics, or pesticides',
          '● Operates without using Earth\'s resources such as oil or natural gas',
          '● Absorbs 700 times more CO2 than natural cedar and produces O2 as Mother Vegetable grows',
          '● Completely organic nutritional foods and pharmaceutical raw materials are produced',
          '● Fish can also be farmed in water rich in Mother Vegetable',
        ],
        solutionsTitle: 'What SEF Can Solve',
        solutions: [
          {
            title: '1. Address global warming through CO2 absorption and no use of primary energy',
            text: 'SEF operates without using natural resources,\nabsorbing a lot of CO2,\nmaking carbon neutrality achievable.',
          },
          {
            title: '2. Achieve complete organic and improve health damage caused by chemicals',
            text: 'Organic health foods and pharmaceuticals can be created without any impurities,\nfundamentally improving modern lifestyles affected by chemicals and additives.',
          },
          {
            title: '3. Raise "future protein source" fish and respond to protein crisis',
            text: 'While cattle and pigs are industries that emit enormous amounts of CO2, fish emit less CO2\nand are a universal protein source that can be eaten in many religious cultures.\n\nAlso, the decline in catch that modern fisheries face,\nthe mixing of heavy metals in farmed fish, and the problem of chemical-rich feed\ncan all be avoided with Mother Vegetable Fish raised in SEF,\nmaking it possible to respond to the protein crisis.\n\nPure, highly nutritious fish like ancient people ate,\nwith zero heavy metals and zero microplastics, for you.',
          },
        ],
      },
      // Section 2
      section2: {
        title: 'Can Be Built Anywhere',
        subtitle: 'Earn 72,000 USD/year in Carbon Credits\nfrom 1 Unit',
        text1: 'CO2 absorbed by SEF can be converted into carbon credits\nunder international standards,\nand its value can be traded in the market.',
        stats: [
          '→ SEF 1 Unit Absorption: Approx. 2,800 tons/year',
          '→ Annual Revenue: Approx. 72,000 USD',
        ],
        industryTitle: 'Mother Vegetable Produced in SEF\nCreates Raw Materials for 8 Industries',
        industries: [
          '● Food Sector',
          '● Pharmaceutical Sector',
          '● Industrial Products',
          '● Aquaculture Sector',
          '● Agriculture Sector',
          '● Biomass Sector',
          '● Energy Sector',
          '● FMCG Sector',
        ],
        doubleIncome: 'Double income is realized through profits from carbon credits\nand sales of commercialized Mother Vegetable.',
        worldTitle: 'SEF Expanding Globally and Installation Sites',
        worldText: 'SEF is being constructed or progressing as a candidate site in the following regions.',
        locations: {
          malaysia: {
            title: 'Malaysia',
            text: 'One section completed on 40ha land within 2 hours from KL',
          },
          japan: {
            title: 'Japan:',
            items: [
              'Capital Model: Candidate site in Tokyo/Shinjuku',
              'Cold Region Model: Hokkaido',
              'Fishery Cooperation Model: Kawazu (Shizuoka), Kuroi (Yamaguchi)',
            ],
          },
        },
      },
      // Section 3
      section3: {
        title: 'No Management Required',
        subtitle: 'SEF Investment Recovery Scenario',
        cards: [
          { title: 'Minimum Investment', value: 'Approx. 1.5 billion yen (TBD)' },
          { title: 'Annual CO2 Absorption Value', value: 'Approx. 770,000 USD (TBD)' },
          { title: 'Additional Revenue', value: 'Additional revenue from food, beauty, and aquatic materials' },
          { title: 'IRR (Investment Recovery Period)', value: '12 years (TBD)' },
        ],
      },
      // Section 4
      section4: {
        title: 'Investment Process — From Application to Start',
        steps: [
          { number: '1', text: '● Apply for one-on-one briefing session' },
          { number: '2', text: '● Attend the briefing session' },
          { number: '3', text: '● Contract via electronic agreement' },
          { number: '4', text: '● Payment' },
        ],
        closing1: 'The world\'s first project to enrich the Earth and people\'s lives while absorbing CO2.',
        closing2: 'Be an investor at the forefront of Earth regeneration.',
      },
    },
  };

  const t = content[language as keyof typeof content] || content.ja;

  return (
    <div className="w-full">
      {/* セクション0: 我々が解決する3つのテーマ */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            {t.section0.title}
          </h2>
          <div className="space-y-4 mb-8">
            {t.section0.themes.map((theme, index) => (
              <p key={index} className="text-xl md:text-2xl text-white">
                {theme}
              </p>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-center mt-12 text-green-300">
            {t.section0.mission}
          </p>
        </div>
      </section>

      {/* セクション1: 35億年前、地球は赤い星だった */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            {t.section1.title}
          </h2>
          <div className="space-y-2 mb-8">
            {t.section1.bullets.map((bullet, index) => (
              <p key={index} className="text-xl md:text-2xl text-white">
                {bullet}
              </p>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white mb-12 whitespace-pre-line">
            {t.section1.text1}
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-300">
            {t.section1.subtitle}
          </h3>
          <p className="text-xl md:text-2xl text-white mb-6 whitespace-pre-line">
            {t.section1.text2}
          </p>
          <p className="text-xl md:text-2xl text-white mb-6 whitespace-pre-line">
            {t.section1.text3}
          </p>
          <p className="text-xl md:text-2xl text-white mb-6 whitespace-pre-line">
            {t.section1.text4}
          </p>
          <p className="text-xl md:text-2xl text-white mb-6 whitespace-pre-line">
            {t.section1.text5}
          </p>
          <p className="text-lg md:text-xl text-gray-300 italic whitespace-pre-line">
            {t.section1.note}
          </p>
        </div>
      </section>

      {/* セクション1.5: Mother Vegetableが必要な理由 */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400 whitespace-pre-line">
            {t.section1_5.title}
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 whitespace-pre-line">
            {t.section1_5.text1}
          </p>

          {/* CO2濃度表 */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t.section1_5.co2Table.title}
            </h3>
            <div className="space-y-3">
              {t.section1_5.co2Table.data.map((item, index) => (
                <div key={index} className="flex justify-between text-xl md:text-2xl text-white">
                  <span>{item.year}</span>
                  <span className="font-bold text-red-400">{item.ppm}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white mb-8 whitespace-pre-line">
            {t.section1_5.text2}
          </p>
          <p className="text-xl md:text-2xl text-white whitespace-pre-line">
            {t.section1_5.text3}
          </p>
        </div>
      </section>

      {/* セクション1.6: Small Earth Factoryが必要な理由 */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-900 to-green-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white whitespace-pre-line">
            {t.section1_6.title}
          </h2>
          
          <div className="space-y-2 mb-8">
            {t.section1_6.threeZeros.map((zero, index) => (
              <p key={index} className="text-xl md:text-2xl text-white font-bold">
                {zero}
              </p>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-white mb-6 whitespace-pre-line">
            {t.section1_6.text1}
          </p>
          <p className="text-xl md:text-2xl text-white mb-12 whitespace-pre-line">
            {t.section1_6.text2}
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-300">
            {t.section1_6.subtitle}
          </h3>
          <div className="space-y-3 mb-12">
            {t.section1_6.features.map((feature, index) => (
              <p key={index} className="text-lg md:text-xl text-white">
                {feature}
              </p>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-300">
            {t.section1_6.solutionsTitle}
          </h3>
          <div className="space-y-8">
            {t.section1_6.solutions.map((solution, index) => (
              <div key={index} className="bg-green-800/50 p-6 rounded-lg">
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {solution.title}
                </h4>
                <p className="text-lg md:text-xl text-white whitespace-pre-line">
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: どこでも建設可能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            {t.section2.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-300 whitespace-pre-line">
            {t.section2.subtitle}
          </h3>

          <p className="text-xl md:text-2xl text-white mb-8 whitespace-pre-line">
            {t.section2.text1}
          </p>

          <div className="space-y-3 mb-12">
            {t.section2.stats.map((stat, index) => (
              <p key={index} className="text-xl md:text-2xl text-white font-bold">
                {stat}
              </p>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300 whitespace-pre-line">
            {t.section2.industryTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t.section2.industries.map((industry, index) => (
              <p key={index} className="text-lg md:text-xl text-white">
                {industry}
              </p>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-white mb-16 whitespace-pre-line">
            {t.section2.doubleIncome}
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
            {t.section2.worldTitle}
          </h3>
          <p className="text-xl md:text-2xl text-white mb-8">
            {t.section2.worldText}
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {t.section2.locations.malaysia.title}
              </h4>
              <p className="text-lg md:text-xl text-white">
                {t.section2.locations.malaysia.text}
              </p>
            </div>

            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {t.section2.locations.japan.title}
              </h4>
              <div className="space-y-2">
                {t.section2.locations.japan.items.map((item, index) => (
                  <p key={index} className="text-lg md:text-xl text-white">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: あなたは管理不要 */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-purple-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            {t.section3.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-300">
            {t.section3.subtitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.section3.cards.map((card, index) => (
              <div key={index} className="bg-purple-800/50 p-6 rounded-lg">
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
                  {card.title}
                </h4>
                <p className="text-lg md:text-xl text-white">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション4: 出資プロセス */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400">
            {t.section4.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.section4.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <p className="text-xl md:text-2xl text-white pt-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl text-white">
              {t.section4.closing1}
            </p>
            <p className="text-3xl md:text-4xl font-bold text-green-400">
              {t.section4.closing2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSectionsComplete;
