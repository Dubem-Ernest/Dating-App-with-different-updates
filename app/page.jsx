"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main className="flex flex-col h-screen">
      <div className="flex w-full gap-16 max-w-80 items-center">
        <div className="flex items-center space-x-3">
          <div className="h-32 w-32 rounded-full">
            <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=250"
              alt=""
              className="rounded-full object-cover h-full w-full"
            />
          </div>
          <div>
            <h1 className="text-md py-4">Welcome,Temioluwa</h1>
            <div>
              <p className="text-sm">My profile completeness</p>
              {/* Progress Bar */}
              <div className="flex items-center">
                <div className="w-64 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full text-center text-white"
                    style={{ width: "60%" }}
                  ></div>
                </div>{" "}
                <span className="text-xs pl-2">60%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <h1>Relationship type:</h1>
          <div className="flex items-center w-32 p-2 rounded-md">
            <select
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="w-full rounded-md text-sm px-2 py-2"
            >
              <option value="Dating">Dating</option>
              <option value="Marraige">Marraige</option>
              <option value="Friendhip">Friendhip</option>
              <option value="Proffessional">Proffessional</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-green-800 h-full overflow-auto no-scrollbar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae
        explicabo illum blanditiis hic debitis ut sint ex veritatis qui vero
        voluptatem dolorem architecto alias nihil id in nesciunt porro
        doloremque pariatur, quos dolores provident sapiente! Id corrupti
        obcaecati autem dignissimos, voluptate incidunt nesciunt, accusantium
        dolore necessitatibus quis iure omnis veniam asperiores at ducimus
        pariatur. Fuga excepturi doloribus repellendus deleniti, at quisquam
        delectus quaerat officiis nemo consequatur molestiae qui nulla et sunt
        voluptatum, placeat quas quod iusto, eum illo libero hic. Recusandae
        harum dignissimos quisquam enim maxime, quia inventore explicabo unde
        maiores! Quam, repellat, recusandae quos magni et, veniam saepe
        architecto temporibus asperiores commodi nesciunt consequuntur. Facere
        consequatur sit quaerat consectetur et voluptas, harum, itaque
        voluptatibus quae aspernatur reprehenderit! Quod fugiat obcaecati iusto
        consectetur laudantium nihil quis voluptate soluta quaerat voluptas
        eveniet dolore ratione, repellendus, ut ex dicta commodi vero in vel
        dolor! Repellat distinctio cupiditate repudiandae voluptatibus
        temporibus molestiae atque vel earum perferendis fuga neque, tempore
        voluptas praesentium minus laudantium porro dolorem similique quibusdam
        accusamus molestias rem quo! Tenetur, odio explicabo? Illum, fugiat
        laboriosam tempore officia explicabo expedita adipisci consequuntur
        dolorum. Distinctio incidunt molestiae quo nisi! Ab cumque,
        reprehenderit maiores officia sapiente sed similique ipsa temporibus ex
        magni veritatis aliquam illo molestiae corporis accusamus adipisci qui
        aliquid perspiciatis laudantium quaerat officiis veniam voluptatum ad!
        Perspiciatis, aliquid unde! Fuga aliquid quasi commodi dicta nihil
        obcaecati explicabo veniam molestias, consectetur pariatur. Quos
        accusamus tempora itaque impedit harum cupiditate vel aperiam minus
        dignissimos hic libero aliquam reiciendis, inventore dolorum, iure
        recusandae totam esse nulla sequi quia, fugiat illum nobis. Amet
        repellendus consectetur doloremque nobis? Esse perspiciatis deleniti,
        non doloremque dolorum praesentium odit asperiores dolore id quidem iste
        voluptatibus, dolores alias tempora quas, eius animi rerum facere
        maiores hic! Perferendis, ipsa animi! Quam consectetur fugiat, error
        laborum sed fugit dolore! Iure dolorum, error eos praesentium provident
        qui aliquam animi illo iusto quaerat voluptas ipsum doloremque mollitia
        libero accusantium, nihil minus fugiat perferendis nam. Ipsum nemo, sed
        explicabo dolorem quo natus doloribus nam deserunt tenetur nobis
        assumenda recusandae debitis commodi hic, autem id consectetur, sit
        tempora quas culpa nesciunt saepe dolores error! Doloribus laudantium
        voluptatibus corporis totam magni sed necessitatibus quidem dolores
        ipsam, in esse suscipit! Laboriosam odit laborum voluptates voluptatem
        eveniet molestiae aliquid eaque dolorum, iusto cumque distinctio ut in
        fugiat provident quo fuga praesentium nisi. Iure id nihil corrupti
        quidem quisquam illum, nam cumque nostrum doloribus mollitia dolorem
        laborum enim minus accusantium illo eos praesentium maiores temporibus
        veritatis veniam deleniti iste! Similique consectetur rerum voluptatum
        nobis dolore ipsum itaque adipisci alias. Quasi, eligendi necessitatibus
        nihil sunt ratione aperiam voluptates fuga assumenda explicabo illum,
        odit illo sed magni. Labore molestias perferendis perspiciatis commodi,
        rerum culpa, quaerat eaque officia eligendi aspernatur dolorem officiis
        molestiae unde repellat? Illum nostrum ipsam facilis corrupti, totam
        quaerat voluptate commodi alias minima labore illo, blanditiis ipsum
        tempore in expedita sapiente dignissimos molestiae vitae ratione odit?
        Molestiae non nostrum dolores magni sequi, pariatur tempore recusandae
        id provident quo in, excepturi eveniet rem, repudiandae facere ex odit
        illum vel amet sapiente. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia temporibus adipisci laborum odit veritatis
        placeat unde facilis debitis, laboriosam ullam, earum, excepturi
        cupiditate impedit tempora quaerat autem reprehenderit distinctio
        ducimus et sint alias iure quis! Vel quo amet nobis cumque, voluptatem
        possimus explicabo commodi accusamus, nihil, inventore labore molestiae
        eius? A natus, aliquid repellat iste enim, commodi consectetur
        aspernatur veritatis ratione, veniam corrupti ducimus sint fugiat
        perferendis? Aliquid necessitatibus quibusdam doloribus, iure officia
        corrupti, laboriosam eaque incidunt quis magnam voluptatibus
        exercitationem non, odio consequatur quos optio id et dolore maiores
        dolor ut ea debitis placeat ipsam. Voluptate tempora quis sunt eius unde
        facilis non autem assumenda blanditiis tempore consectetur veritatis,
        placeat amet ex cum magnam veniam, eligendi expedita, provident officiis
        quas ullam nesciunt. Natus cupiditate dolore, nam molestias voluptatibus
        fuga atque perferendis officia, ducimus qui fugiat! Exercitationem
        minus, a nobis deleniti nisi ratione aliquid impedit nam, repellat quos
        laboriosam soluta dolore eius voluptates ipsum placeat minima reiciendis
        vel excepturi eaque? Officiis, accusantium minima suscipit porro quis
        nisi vel! Cupiditate voluptate pariatur doloribus! Eveniet quia minima
        accusamus ullam obcaecati odit ipsum perspiciatis. Non quaerat earum
        perspiciatis quia itaque? Quo corporis quae ratione vel iusto nemo et
        distinctio inventore in eaque, tempora veritatis? Dolor dignissimos
        explicabo rerum ut mollitia hic libero quia iusto doloribus ipsam,
        voluptatum tempore dolorem, minima sint cumque rem. Provident officia
        repudiandae mollitia reprehenderit cupiditate corporis aut illum,
        tenetur, minima modi similique reiciendis eligendi autem magni inventore
        dolores esse, nesciunt quae quos eum exercitationem asperiores
        perferendis sequi dignissimos! Quam nulla voluptatum itaque ab impedit
        commodi aut, cupiditate cumque, earum veritatis minima. Itaque minus ex
        eveniet cum deleniti saepe perferendis! Voluptatum ea, numquam quae
        eveniet debitis deleniti, nihil eaque laborum illo ut quis, tempore
        vitae sequi? Rerum suscipit officiis aliquid dolore, cupiditate corporis
        ex est consequuntur, quibusdam minus nam, vero similique. Fugiat
        adipisci facilis deserunt, cupiditate ab dignissimos, mollitia molestias
        similique molestiae eius id repellat fugit ratione beatae soluta vero,
        quaerat enim exercitationem tempora earum doloribus. Inventore quia odio
        velit cumque ea cupiditate. Tempore harum illum aut eveniet sequi,
        delectus aliquam iure ipsam est. Voluptatem, quod magnam consequuntur
        repellat animi a nesciunt dolor molestias reprehenderit autem debitis
        officia consectetur distinctio sint, numquam saepe? Blanditiis nulla
        dignissimos ipsum, perferendis maiores eaque, sed nobis asperiores
        nesciunt tenetur labore in consequatur laborum velit! Deleniti
        temporibus in corporis laboriosam quisquam numquam provident dolorem
        voluptate nostrum minima accusamus assumenda repudiandae ex quasi ipsam
        aperiam dolores corrupti eveniet, voluptatum sint. Ratione corrupti,
        nemo, consequuntur tempora amet impedit fugiat eveniet dolorem itaque
        quo hic? In delectus rem a provident vel eum debitis perferendis
        doloremque, illo vero natus commodi eaque officiis neque ab asperiores
        obcaecati quisquam sint aperiam, aspernatur alias corporis. Nesciunt
        quibusdam maiores cumque quaerat eos, neque ipsum! Est, voluptas vitae.
        Assumenda maiores sint consequatur labore voluptatem itaque culpa. Nemo
        repudiandae consequuntur odio, distinctio voluptas id facere atque
        quibusdam ut aspernatur tempore cum, delectus nisi veritatis perferendis
        natus! Sit facilis non consequuntur recusandae voluptatum modi ipsum
        soluta. Praesentium tenetur cupiditate deserunt sint laboriosam, totam
        minus aut quaerat quos beatae, quasi fuga odio, dolorem consequuntur
        veniam obcaecati culpa quisquam eius? Quisquam voluptatibus laboriosam
        iusto fuga delectus, ratione quos, cupiditate dolorum odit suscipit
        omnis. Perferendis sequi ipsum voluptates, veritatis accusamus error
        debitis facilis id voluptatem minima dignissimos expedita minus ullam
        distinctio mollitia consequuntur eveniet voluptatum ab harum ea beatae
        accusantium, ratione rem! Illo obcaecati voluptas eius dolore, provident
        eaque expedita dolores dolorum, et officia atque repellendus rerum
        veniam excepturi minima autem tenetur eum sequi quam corporis
        voluptatum. Aperiam eius magnam nostrum esse in a totam, accusantium
        perspiciatis ipsum consequuntur dolore facere voluptatum iste nam
        quisquam non laborum porro maxime?
      </div>
    </main>
  );
}
