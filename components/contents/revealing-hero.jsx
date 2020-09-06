import { useEffect } from "react";

const RevealingHero = () => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/revealing-hero.js";
    frontEnd.id = "revealing-hero-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("revealing-hero-js").remove();
    };
  });

  return (
    <>
      <section class="position-relative z-index-2 bg shadow-sm">
        <div class="container max-width-sm height-100vh flex flex-center">
          <div class="text-component text-center">
            <h1>Revealing Section</h1>
            <p>👇 Scroll down to see the effect</p>
          </div>
        </div>
      </section>

      <section class="revealing-section bg z-index-1 js-revealing-section">
        <div class="container max-width-sm padding-y-xl">
          <div class="text-component line-height-lg v-space-md">
            <h1>New Content</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, harum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              hic at assumenda quibusdam officiis architecto aliquam
              reprehenderit enim voluptates, totam animi iusto illo incidunt
              nemo deserunt reiciendis maiores ex. Deserunt soluta, ad facilis
              ipsum consectetur aspernatur assumenda numquam ea adipisci
              architecto magnam, itaque culpa, in debitis nam voluptate
              repellendus. Nam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              hic at assumenda quibusdam officiis architecto aliquam
              reprehenderit enim voluptates, totam animi iusto illo incidunt
              nemo deserunt reiciendis maiores ex. Deserunt soluta, ad facilis
              ipsum consectetur aspernatur assumenda numquam ea adipisci
              architecto magnam, itaque culpa, in debitis nam voluptate
              repellendus. Nam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam
              ut voluptas iste perferendis aperiam amet, voluptatem quis quod
              incidunt, hic aliquid sunt ullam cupiditate atque adipisci eos at,
              provident quasi earum praesentium! Expedita, illo, quis voluptatum
              neque facilis cum veritatis officia unde distinctio ipsum
              repellendus. Ea quae accusantium fuga iste nihil assumenda
              corporis dolorum sunt consequuntur deleniti quasi expedita a
              voluptate nemo vel natus qui, sint repellat reiciendis?
              Consequuntur ut culpa odio ad. Fugiat totam repellat harum odio
              ullam blanditiis iste cum, ipsam qui, inventore optio corrupti ab
              assumenda? Sequi eaque voluptatem dolore enim aut possimus ullam
              vel laboriosam nihil magnam recusandae, voluptatum molestias totam
              quae autem labore cupiditate reiciendis optio, eos tempora aliquam
              maxime hic. Maiores, hic totam? Doloribus eligendi, mollitia
              cupiditate quaerat harum, recusandae eveniet beatae quis est nemo
              rerum! Ratione, odit laboriosam soluta minus nobis vero
              dignissimos iste, totam animi ipsam deserunt earum blanditiis
              excepturi id unde asperiores atque, facilis aut nihil. Dolore nam
              laudantium nisi esse, aliquam dolorum beatae earum. Asperiores
              sapiente praesentium magni distinctio atque id amet impedit sed
              unde minus possimus obcaecati, repellendus, commodi facilis
              excepturi repudiandae nam totam similique perspiciatis eligendi,
              maxime corporis eius! Voluptatum non itaque harum, repellat
              sapiente enim sint?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nisi cumque error laudantium aperiam, beatae hic facere asperiores
              reprehenderit fugiat, illo ea. Magni, eaque? Ab, eos saepe
              cupiditate asperiores consequatur deleniti dolor aliquid veritatis
              enim magnam dolorum accusamus quos fuga iusto, unde aperiam itaque
              eligendi! Laboriosam deleniti expedita exercitationem quasi
              debitis saepe laudantium molestiae totam. Labore perferendis
              asperiores cupiditate consectetur excepturi dolorum nisi veritatis
              ratione, quas dolore explicabo molestiae dolor saepe eos id magni
              nemo ipsa fugit illo ab esse?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nisi cumque error laudantium aperiam, beatae hic facere asperiores
              reprehenderit fugiat, illo ea. Magni, eaque? Ab, eos saepe
              cupiditate asperiores consequatur deleniti dolor aliquid veritatis
              enim magnam dolorum accusamus quos fuga iusto, unde aperiam itaque
              eligendi! Laboriosam deleniti expedita exercitationem quasi
              debitis saepe laudantium molestiae totam. Labore perferendis
              asperiores cupiditate consectetur excepturi dolorum nisi veritatis
              ratione, quas dolore explicabo molestiae dolor saepe eos id magni
              nemo ipsa fugit illo ab esse?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RevealingHero;
