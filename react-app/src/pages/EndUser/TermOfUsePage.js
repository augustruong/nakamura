import React, { useEffect } from "react";
import words from "../../words";
import { motion } from "framer-motion";

export default function TermOfUsePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.termsofuse.title;
    }, [])
    return(
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1}}
        >
            <div id="termofuse-page" className="mt-nav mb-100 px-28vw">
                <div className="header text-align-ct">
                    <div className="title large py-m">{words.terms.termsofuse.title}</div>
                </div>
                <p className="content mt-m">
                    <span className="bold">第1条（適用）</span><br/>

                    1. 本規約は、本サービスの提供条件及び本サービスの利用に関する当社と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。<br/>

                    2. 当社が当社ウェブサイト上で掲載する本サービス利用に関するルールは、本規約の一部を構成するものとします。<br/>

                    3. 本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。<br/><br/>

                    <span className="bold">第2条（定義）</span><br/>

                    本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。<br/>

                    (1)「サービス利用契約」とは、本規約を契約条件として当社と登録ユーザーの間で締結される、本サービスの利用契約を意味します。<br/>

                    (2)「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。<br/>

                    (3)「投稿データ」とは、登録ユーザーが本サービスを利用して投稿その他送信するコンテンツ（文章、画像、動画その他のデータを含みますがこれらに限りません。）を意味します。<br/>

                    (4)「当社」とは、OriOriコンサルティングを意味します。<br/>

                    (5)「当社ウェブサイト」とは、そのドメインが「oriori.online」である、当社が運営するウェブサイト（理由の如何を問わず、当社のウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。<br/>

                    (6)「登録ユーザー」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。<br/>

                    (7)「本サービス」とは、当社が提供する「紙芝居活用アカデミー」という名称のサービス（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。<br/>

                    (8)「コンテンツ」とは、本サービスにおいて当社が提供する文章、画像、音声、動画その他のデータを意味します。<br/><br/>

                    <span className="bold">第3条（登録）</span><br/>

                    1. 本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当社の定める一定の情報（以下「登録事項」といいます。）を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。<br/>

                    2. 登録の申請は必ず本サービスを利用する個人または法人自身が行わなければならず、原則として代理人による登録申請は認められません。また、本サービスの利用を希望する者は、登録の申請にあたり、真実、正確かつ最新の情報を当社に提供しなければなりません。<br/>

                    3. 当社は、当社の基準に従って、第1項に基づいて登録申請を行った登録希望者（以下「登録申請者」といいます。）の登録の可否を判断し、当社が登録を認める場合にはその旨を登録申請者に通知します。登録申請者の登録ユーザーとしての登録は、当社が本項の通知を行ったことをもって完了したものとします。<br/>

                    4. 前項に定める登録の完了時に、サービス利用契約が登録ユーザーと当社の間に成立し、登録ユーザーは本サービスを本規約に従い利用することができるようになります。<br/>

                    5. 当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。<br/>

                    (1)当社に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合<br/>

                    (2)未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人､保佐人または補助人の同意等を得ていなかった場合<br/>

                    (3)反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合<br/>

                    (4) 登録希望者が過去当社との契約に違反した者またはその関係者であると当社が判断した場合<br/>

                    (5)第10条に定める措置を受けたことがある場合<br/>

                    (6)その他、登録を適当でないと当社が判断した場合<br/><br/>

                    <span className="bold">第4条（登録事項の変更）</span><br/>

                    登録ユーザーは、登録事項に変更があった場合、当社の定める方法により当該変更事項を遅滞なく当社に通知するものとします。<br/><br/>

                    <span className="bold">第5条（パスワード及びユーザーIDの管理）</span><br/>

                    1. 登録ユーザーは、自己の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。<br/>

                    2. パスワードまたはユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとします。<br/><br/>

                    <span className="bold">第6条（料金及び支払方法）</span><br/>

                    1. 登録ユーザーは、本サービス利用の対価として、別途当社が定め、当社ウェブサイトに表示する利用料金を負担するものとします。<br/>

                    2. 利用料金は、当社が指定する支払方法により当社に支払うものとします。振込手数料その他支払に必要な費用は登録ユーザーの負担とします。<br/>

                    3. 登録ユーザーが利用料金の支払を遅滞した場合、登録ユーザーは年14.6％の割合による遅延損害金を当社に支払うものとします。<br/><br/>

                    <span className="bold">第7条（禁止事項）</span><br/>

                    登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはなりません。<br/>

                    (1)法令に違反する行為または犯罪行為に関連する行為<br/>

                    (2)当社、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為<br/>

                    (3)公序良俗に反する行為<br/>

                    (4)当社、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為<br/>

                    (5)本サービスを通じ、以下に該当し、または該当すると当社が判断する情報を当社または本サービスの他の利用者に送信すること<br/>
                    ・過度に暴力的または残虐な表現を含む情報<br/>
                    ・コンピューター・ウィルスその他の有害なコンピューター ・プログラムを含む情報<br/>
                    ・当社、本サービスの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報<br/>
                    ・過度にわいせつな表現を含む情報<br/>
                    ・差別を助長する表現を含む情報<br/>
                    ・自殺、自傷行為を助長する表現を含む情報<br/>
                    ・薬物の不適切な利用を助長する表現を含む情報<br/>
                    ・反社会的な表現を含む情報<br/>
                    ・チェーンメール等の第三者への情報の拡散を求める情報<br/>
                    ・他人に不快感を与える表現を含む情報<br/>

                    (6)本サービスのネットワークまたはシステム等に過度な負荷をかける行為<br/>

                    (7)当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為<br/>

                    (8)本サービスの運営を妨害するおそれのある行為<br/>

                    (9)当社のネットワークまたはシステム等への不正アクセス<br/>

                    (10)第三者に成りすます行為<br/>

                    (11)本サービスの他の利用者のIDまたはパスワードを利用する行為<br/>

                    (12)当社が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為<br/>

                    (13)本サービスの他の利用者の情報の収集<br/>

                    (14)当社、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為<br/>

                    (15)当社ウェブサイト上で掲載する本サービス利用に関するルールに抵触する行為<br/>

                    (16)反社会的勢力等への利益供与<br/>

                    (17)面識のない異性との出会いを目的とした行為<br/>

                    (18)本サービスを第三者に利用・視聴させる行為<br/>

                    (19)コンテンツを複製、譲渡、貸与、公衆送信等する行為<br/>

                    (20)前各号の行為を直接または間接に惹起し、または容易にする行為<br/>

                    (21)前各号の行為を試みること<br/>

                    (22)その他、当社が不適切と判断する行為<br/><br/>

                    <span className="bold">第8条（本サービスの停止等）</span><br/>

                    当社は、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。<br/>

                    (1) 本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合<br/>

                    (2) コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サービスの運営ができなくなった場合<br/>

                    (3)地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合<br/>

                    (4)その他、当社が停止または中断を必要と判断した場合<br/><br/>

                    <span className="bold">第9条（権利帰属）</span><br/>

                    1. 当社ウェブサイト及び本サービスに関する知的財産権は全て当社または当社にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、当社ウェブサイトまたは本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。<br/>

                    2. 登録ユーザーは、投稿データについて、自らが投稿その他送信することについての適法な権利を有していること、及び投稿データが第三者の権利を侵害していないことについて、当社に対し表明し、保証するものとします。<br/>

                    3. 登録ユーザーは、投稿データについて、当社に対し、世界的、非独占的、無償、サブライセンス可能かつ譲渡可能な使用、複製、配布、派生著作物の作成、表示及び実行に関するライセンスを付与します。また、他の登録ユーザーに対しても、本サービスを利用して登録ユーザーが投稿その他送信した投稿データの使用、複製、配布、派生著作物を作成、表示及び実行することについての非独占的なライセンスを付与します。<br/>

                    4. 登録ユーザーは、当社及び当社から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。<br/><br/>

                    <span className="bold">第10条（登録抹消等）</span><br/>

                    1. 当社は、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、投稿データを削除もしくは当該登録ユーザーについて本サービスの利用を一時的に停止し、または登録ユーザーとしての登録を抹消、もしくはサービス利用契約を解除することができます。<br/>

                    (1)本規約のいずれかの条項に違反した場合<br/>

                    (2)登録事項に虚偽の事実があることが判明した場合<br/>

                    (3)支払停止もしくは支払不能となり、または破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始もしくはこれらに類する手続の開始の申立てがあった場合<br/>

                    (4)当社からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合<br/>

                    (5)第3条第5項各号に該当する場合<br/>

                    (6)その他、当社が本サービスの利用、 登録ユーザーとしての登録、またはサービス利用契約の継続を適当でないと判断した場合<br/>

                    2. 前項各号のいずれかの事由に該当した場合、登録ユーザーは、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。<br/>

                    3. 当社は、本条に基づき当社が行った行為により登録ユーザーに生じた損害について一切の責任を負いません。<br/><br/>

                    <span className="bold">第11条（退会）</span><br/>

                    1. 登録ユーザーは、当社所定の手続の完了により、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。<br/>

                    2. 退会にあたり、当社に対して負っている債務が有する場合は、登録ユーザーは、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。<br/>

                    3. 退会後の利用者情報の取扱いについては、第15条の規定に従うものとします。<br/><br/>

                    <span className="bold">第12条（本サービスの内容の変更、終了）</span><br/>

                    1. 当社は、当社の都合により、本サービスの内容を変更し、または提供を終了することができます。<br/>

                    2.当社が本サービスの提供を終了する場合、当社は登録ユーザーに事前に通知するものとします。<br/><br/>

                    <span className="bold">第13条（保証の否認及び免責）</span><br/>

                    1. 当社は、本サービスが登録ユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、登録ユーザーによる本サービスの利用が登録ユーザーに適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示または黙示を問わず何ら保証するものではありません。<br/>

                    2. 当社は、本サービスに関して登録ユーザーが被った損害につき、過去12ヶ月間に登録ユーザーが当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。<br/>

                    3. 本サービスまたは当社ウェブサイトに関連して登録ユーザーと他の登録ユーザーまたは第三者との間において生じた取引、連絡、紛争等については、登録ユーザーが自己の責任によって解決するものとします。<br/>

                    4. 登録ユーザーは、本サービスの利用にあたり、次の各号を承諾するものとします。<br/>

                    (1)当社は本サービスの利用が可能な情報端末の種類、仕様、動作環境等を、本サービスまたは当社のウェブサイトその他の方法で指定し、指定以外の端末、仕様、動作環境等では本サービスの全部または一部が利用できない場合があること。<br/>

                    (2)コンテンツの訂正、補訂、差し替え、取り下げ等により、当初閲覧できていた本サービスのコンテンツの内容が後に変更または消去等される場合があること。<br/>

                    (3)本サービスで配信するコンテンツには、別途当社が定め通知する閲覧可能期間があり、当該期間終了後はコンテンツを閲覧できなくなること。<br/>

                    (4)当社のサーバー、プラットフォーム等のシステム変更またはバージョンアップによってコンテンツの閲覧可能期間が変更される場合があること。<br/><br/>

                    <span className="bold">第14条（秘密保持）</span><br/>

                    登録ユーザーは、本サービスに関連して当社が登録ユーザーに対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。<br/><br/>

                    <span className="bold">第15条（利用者情報の取扱い）</span><br/>

                    1. 当社による登録ユーザーの利用者情報の取扱いについては、別途当社プライバシーポリシーの定めによるものとし、登録ユーザーはこのプライバシーポリシーに従って当社が登録ユーザーの利用者情報を取扱うことについて同意するものとします。<br/>

                    2. 当社は、登録ユーザーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、登録ユーザーはこれに異議を唱えないものとします。<br/><br/>

                    <span className="bold">第16条（本規約等の変更）</span><br/>

                    当社は以下の場合には、登録ユーザーの個別の同意を要せず、本規約を変更することができるものとします。この場合、当社は登録ユーザーに対し、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。<br/>

                    (1)本規約の変更が登録ユーザーの一般の利益に適合するとき。<br/>

                    (2)本規約の変更が本サービスの利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。<br/><br/>

                    <span className="bold">第17条（連絡／通知）</span><br/>

                    1.本サービスに関する問い合わせその他登録ユーザーから当社に対する連絡または通知、及び本規約の変更に関する通知その他当社から登録ユーザーに対する連絡または通知は、当社の定める方法で行うものとします。<br/>

                    2.当社が登録事項に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、登録ユーザーは当該連絡または通知を受領したものとみなします。<br/><br/>

                    <span className="bold">第18条（サービス利用契約上の地位の譲渡等）</span><br/>

                    1. 登録ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。<br/>

                    2. 当社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項に予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。<br/><br/>

                    <span className="bold">第19条（分離可能性）</span><br/>

                    本規約のいずれかの条項またはその一部が消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。<br/><br/>

                    <span className="bold">第20条（準拠法及び管轄裁判所）</span><br/>

                    1. 本規約及びサービス利用契約の準拠法は日本法とします。<br/>

                    2. 本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。<br/>

                    令和5年3月13日 制定

                </p>
            </div>
        </motion.main>
    )
}


