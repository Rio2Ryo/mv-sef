'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function NewSections() {
  const { t } = useLanguage()

  return (
    <>
      {/* セクション1: 35億年前、地球は赤い星だった */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              {t({ JP: '35億年前、地球は赤い星だった', EN: '3.5 Billion Years Ago, Earth Was a Red Planet' })}
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>{t({ JP: 'CO2だらけ', EN: 'Full of CO2' })}</li>
                <li>{t({ JP: '海も陸も赤茶色', EN: 'Both ocean and land were reddish-brown' })}</li>
                <li>{t({ JP: '強い紫外線が降り注ぐ', EN: 'Strong ultraviolet rays poured down' })}</li>
              </ul>

              <p className="text-center text-xl mb-12">
                {t({ 
                  JP: 'かつての地球は、生命が生まれることは不可能な赤い星だった。', 
                  EN: 'Once upon a time, Earth was a red planet where life could not be born.' 
                })}
              </p>

              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border border-green-500/30">
                <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
                  {t({ 
                    JP: 'Mother Vegetableがこの星を「生命の母」にした', 
                    EN: 'Mother Vegetable Made This Planet the "Mother of Life"' 
                  })}
                </h3>
                
                <div className="space-y-4 text-base">
                  <p>
                    {t({ 
                      JP: 'そんな古代地球の海の深くで生まれた最初の生命体。それがMother Vegetable。', 
                      EN: 'The first life form born deep in the ocean of ancient Earth. That is Mother Vegetable.' 
                    })}
                  </p>
                  
                  <p>
                    {t({ 
                      JP: 'Mother Vegetableは進化の過程で光合成の力を手に入れ、CO2を吸い、O2を生み出せるようになり、地球を「生命の母」に変えた存在。', 
                      EN: 'Mother Vegetable gained the power of photosynthesis in the process of evolution, absorbing CO2 and producing O2, transforming Earth into the "Mother of Life".' 
                    })}
                  </p>
                  
                  <p className="text-sm opacity-80">
                    {t({ 
                      JP: '酸素で満たされはじめた星には住めなくなった生物もいた。', 
                      EN: 'Some organisms could no longer live on a planet that began to be filled with oxygen.' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: どこでも建設可能 */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              {t({ JP: 'どこでも建設可能', EN: 'Can Be Built Anywhere' })}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 text-center mb-12">
              {t({ 
                JP: '1ユニットから72,000USD/年のカーボンクレジットを獲得', 
                EN: 'Earn 72,000 USD/year in Carbon Credits from 1 Unit' 
              })}
            </h3>

            <div className="space-y-8 mb-16">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t({ 
                    JP: 'SEFが吸収したCO2は、国際基準でカーボンクレジット化でき、その価値は市場で取引が可能。', 
                    EN: 'CO2 absorbed by SEF can be converted into carbon credits under international standards, and its value can be traded in the market.' 
                  })}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30">
                    <p className="text-green-400 font-semibold mb-2">
                      {t({ JP: 'SEF1ユニットの吸収量', EN: 'SEF 1 Unit Absorption' })}
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {t({ JP: '年間約2,800トン', EN: 'Approx. 2,800 tons/year' })}
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
                    <p className="text-blue-400 font-semibold mb-2">
                      {t({ JP: '年間収益', EN: 'Annual Revenue' })}
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {t({ JP: '約72,000 USD 相当', EN: 'Approx. 72,000 USD' })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">
                  {t({ 
                    JP: 'SEFで作られた Mother Vegetableは、8つの産業の原料を作成', 
                    EN: 'Mother Vegetable Produced in SEF Creates Raw Materials for 8 Industries' 
                  })}
                </h4>
                <p className="text-gray-300 mb-4">
                  ● {t({ JP: 'Food Sector/食品分野', EN: 'Food Sector' })}
                </p>
                <p className="text-gray-300 text-lg">
                  {t({ 
                    JP: 'カーボンクレジットのよる利益と国家化済みのMother Vegetableの売り上げによる、ダブルインカムが実現。', 
                    EN: 'Double income is realized through profits from carbon credits and sales of nationalized Mother Vegetable.' 
                  })}
                </p>
              </div>
            </div>

            {/* 世界へ広がるSEFと設置候補地 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-3xl font-bold text-white mb-8 text-center">
                {t({ JP: '世界へ広がるSEFと設置候補地', EN: 'SEF Expanding Globally and Installation Sites' })}
              </h4>
              
              <p className="text-gray-300 mb-8 text-center">
                {t({ 
                  JP: 'SEFは以下の地域で建築または候補地として進行しています。', 
                  EN: 'SEF is being constructed or progressing as a candidate site in the following regions.' 
                })}
              </p>

              <div className="space-y-6">
                <div className="bg-yellow-900/20 p-6 rounded-xl border border-yellow-500/30">
                  <h5 className="text-xl font-bold text-yellow-400 mb-3">
                    {t({ JP: 'マレーシア', EN: 'Malaysia' })}
                  </h5>
                  <p className="text-gray-300">
                    {t({ 
                      JP: 'KLから2時間圏で40haの土地にて一区画が建築完了', 
                      EN: 'One section completed on 40ha land within 2 hours from KL' 
                    })}
                  </p>
                </div>

                <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                  <h5 className="text-xl font-bold text-red-400 mb-3">
                    {t({ JP: '日本', EN: 'Japan' })}
                  </h5>
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      {t({ JP: '首都モデル：東京・新宿の候補地に', EN: 'Capital Model: Candidate site in Tokyo/Shinjuku' })}
                    </li>
                    <li>
                      {t({ JP: '寒冷域モデル：北海道', EN: 'Cold Region Model: Hokkaido' })}
                    </li>
                    <li>
                      {t({ JP: '漁協連携モデル：静岡県 河津、山口県 黒井', EN: 'Fishery Cooperation Model: Kawazu (Shizuoka), Kuroi (Yamaguchi)' })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: あなたは管理不要 SEFの投資回収シナリオ */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              {t({ JP: 'あなたは管理不要', EN: 'No Management Required' })}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 text-center mb-12">
              {t({ JP: 'SEFの投資回収シナリオ', EN: 'SEF Investment Recovery Scenario' })}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border border-blue-500/30">
                <p className="text-blue-300 font-semibold mb-2">
                  {t({ JP: '最低投資額', EN: 'Minimum Investment' })}
                </p>
                <p className="text-3xl font-bold text-white">
                  {t({ JP: '約15億円（未定）', EN: 'Approx. 1.5 billion yen (TBD)' })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                <p className="text-green-300 font-semibold mb-2">
                  {t({ JP: '年間CO2吸収価値', EN: 'Annual CO2 Absorption Value' })}
                </p>
                <p className="text-3xl font-bold text-white">
                  {t({ JP: '約77万USD（未定）', EN: 'Approx. 770,000 USD (TBD)' })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                <p className="text-purple-300 font-semibold mb-2">
                  {t({ JP: '追加収益', EN: 'Additional Revenue' })}
                </p>
                <p className="text-xl font-bold text-white">
                  {t({ JP: '食品・美容・水産素材としての追加収益', EN: 'Additional revenue from food, beauty, and aquatic materials' })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 p-6 rounded-xl border border-orange-500/30">
                <p className="text-orange-300 font-semibold mb-2">
                  {t({ JP: 'IRR（投資回収期間）', EN: 'IRR (Investment Recovery Period)' })}
                </p>
                <p className="text-3xl font-bold text-white">
                  {t({ JP: '12年（未定）', EN: '12 years (TBD)' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4: 出資プロセス */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              {t({ JP: '出資プロセス — 申し込みから開始まで', EN: 'Investment Process — From Application to Start' })}
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { JP: '詳説明会申し込み', EN: 'Apply for detailed briefing session' },
                { JP: '説明会のご参加', EN: 'Attend the briefing session' },
                { JP: '電子契約書による契約', EN: 'Contract via electronic agreement' },
                { JP: 'ご入金', EN: 'Payment' }
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                    <span className="text-green-400 font-bold text-xl">{index + 1}</span>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    ● {t(step)}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border border-green-500/30 text-center">
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                {t({ 
                  JP: 'CO2を吸収しながら地球と人々の生活を豊かにする、世界で初めてのプロジェクト。', 
                  EN: 'The world\'s first project to enrich the Earth and people\'s lives while absorbing CO2.' 
                })}
              </p>
              <p className="text-2xl font-bold text-green-400">
                {t({ JP: '地球再生の最前線に立つ投資家に。', EN: 'Be an investor at the forefront of Earth regeneration.' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
