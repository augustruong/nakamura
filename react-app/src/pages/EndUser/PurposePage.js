import React, { useState,useEffect } from "react";
import words from "../../words";
import { motion } from "framer-motion";

export default function PurposePage(){
    const [device,setDevice] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.purposeofuse.title;

        handleResize();
        window.addEventListener('resize', handleResize);
    }, [])
    function handleResize() {
        if (window.outerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
    }
    return(
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1}}
        >
            <div id="purpose-page" className={device === "pc" ? "mt-nav mb-100 px-28vw" : "mt-nav mb-100 px-base"}>
                <div className="header text-align-ct">
                    <div className="title large py-m">{words.terms.purposeofuse.title}</div>
                </div>
                <p className="content mt-m">
                    対応する利用者情報の項目<br/><br/>

                    <span className="bold">1.当社のサービスに関連して、個人を識別できない形式に加工した統計データを作成するため</span><br/>

                    ・端末情報<br/>

                    ・ログ情報<br/>

                    ・Cookie及び匿名ID<br/>

                    ・位置情報<br/><br/>

                    <span className="bold">2.当社または第三者の広告の配信または表示</span><br/>

                    ・端末情報<br/>

                    ・ログ情報<br/>

                    ・Cookie及び匿名ID<br/>

                    ・位置情報<br/><br/>

                    <span className="bold">3.その他マーケティングに利用するため</span><br/>

                    ・メールアドレス<br/>

                    ・生年月日<br/>

                    ・その他当社が定める入力フォームにユーザーが入力する情報<br/><br/>

                    <span className="bold">3.通知・公表または同意取得の方法、利用中止要請の方法</span><br/>

                    3-1　以下の利用者情報については、その収集が行われる前にユーザーの同意を得るものとします。<br/>

                    (1)端末情報<br/>

                    (2)位置情報<br/>

                    3-2　ユーザーは、本サービスの所定の設定を行うことにより、利用者情報の全部または一部についてその利用の停止を求めることができ、この場合、当社は速やかに、当社の定めるところに従い、その利用を停止します。なお利用者情報の項目によっては、その収集または利用が本サービスの前提となるため、当社所定の方法により本サービスを退会した場合に限り、当社はその収集を停止します。<br/><br/>

                    <span className="bold">4.第三者提供</span><br/>

                    当社は、利用者情報のうち、個人情報については、個人情報保護法その他の法令に基づき開示が認められる場合を除く他、予めユーザーの同意を得ないで、第三者に提供しません。但し、次に掲げる場合はこの限りではありません。<br/>

                    (1)当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合<br/>

                    (2)合併その他の事由による事業の承継に伴って個人情報が提供される場合<br/>

                    (3)国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合<br/>

                    (4)その他、個人情報保護法その他の法令で認められる場合<br/><br/>

                    <span className="bold">5.個人情報の開示</span><br/>

                    当社は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。<br/><br/>


                    <span className="bold">6.個人情報の訂正及び利用停止等</span><br/>

                    6-1　当社は、ユーザーから、⑴個人情報が真実でないという理由によって個人情報保護法の定めに基づき、その内容の訂正を求められた場合、及び⑵あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づき、その利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、合理的な理由に基づいて訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。<br/>

                    6-2　当社は、ユーザーから、ユーザーの個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。<br/>

                    6-3　個人情報保護法その他の法令により、当社が訂正等または利用停止等の義務を負わない場合は、前2項の規定は適用されません。<br/><br/>


                    <span className="bold">7.セキュリティに関して</span><br/>

                    7-1　ユーザーの個人情報はユーザーのプライバシー保護及び、セキュリティの為パスワードで保護されております。<br/>

                    7-2　ユーザーの個人情報の登録が発生するWebページではデータ送信の際に、業界で機密保持の標準規格として使用されているSSL（Secure Socket Layer）暗号化技術を使用しております。<br/><br/>


                    <span className="bold">8.お問い合わせ窓口</span><br/>

                    ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願い致します。<br/>

                    住所：〒183-0015　東京都府中市清水が丘3-8-43<br/>

                    梅企画　担当部署：カスタマーサポート<br/>

                    E-mail：waseda.writingcoach@gmail.com<br/><br/>


                    <span className="bold">9.プライバシーポリシーの変更手続</span><br/>

                    当社は、利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。変更した場合には、ウェブサイト上での告知をもってユーザーに通知いたします。但し、法令上ユーザーの同意が必要となるような内容の変更の場合は、当社所定の方法でユーザーの同意を得るものとします。<br/><br/>

                    令和5年3月13日　策定<br/>

                    Copyright 2024 梅企画

                </p>
            </div>
        </motion.main>
    )
}

