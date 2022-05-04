import React, { ReactElement } from "react"

import Layout from "../layouts/layout"
import ContentLayout from "../layouts/content"
// import { Link } from "gatsby"
import Maps from "../components/map2d"

interface Props {}

//
// Page fix de demo / test
//

function Content(_props: Props): ReactElement {
  return (
    <Layout>
      <ContentLayout>
        <p className="text-4xl font-bold text-gray-600">
          Découvrez les données
        </p>
        <p className="my-6 text-2xl font-bold text-gray-600">
          Objectif 100% fibre très haut débit d’ici 2025 : FIBRE44 lance les
          travaux
        </p>
        <p className="my-6 text-xl font-bold text-gray-400">
          Quel est le planning de déploiement de la fibre très haut débit en
          Loire-Atlantique ?
        </p>
        <div className="flex gap-4 justify-center items-center flex-col 2xl:flex-row">
          <iframe
            title="deploiement_fibre"
            src="http://egeo.geofit.fr/metabase/public/question/433558fa-cd5a-477d-93b8-474ed6760040"
            allowTransparency={true}
            className="w-180 h-140 border-0 flex-2"
          ></iframe>

          <div className="flex-1 items-start">
            <p className="my-5">
              Le Département intervient en dehors des agglomérations de Nantes,
              de Saint-Nazaire et de la presqu'île guérandaise qui gèrent le
              déploiement de la fibre optique avec les opérateurs privés
              (Orange, SFR, Free).
            </p>
            <p className="my-5">
              Début 2021, le Département avait déployé 114 000 prises en dehors
              de ces zones urbaines, dans une logique de développement équilibré
              des territoires.
            </p>{" "}
            <p className="font-bold">
              179 000 prises restent à construire d'ici 2025 selon le planning
              suivant :
            </p>
            <ul className="list-disc pl-10">
              <li>Fin 2022 : 48 000 locaux équipés en fibre optique</li>
              <li>Fin 2023 : 108 000 locaux équipés</li>
              <li>Fin 2024 : 166 000 locaux équipés</li>
              <li>
                Fin 2025 : 179 000 locaux équipés. 100% du département couvert
                par le très haut débit.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <iframe
            title="carte_fibre"
            src="http://egeo.geofit.fr/metabase/public/question/6e937e9d-760f-43c6-b39c-05145cd63d07"
            allowTransparency={true}
            className="w-full h-192 border-0"
          ></iframe>
        </div>
        <p className="my-28">
          <a
            href="https://numerique.loire-atlantique.fr/jcms/classement-des-contenus/actualites/type-d-actualite/article-simple/actualite-objectif-100-fibre-tres-haut-debit-dici-2025-fibre44-lance-les-travaux-fr-p1_69114?category=local_58480
"
          >
            Source numerique.loire-atlantique.fr
          </a>
        </p>

        <Maps format="max" idMap={63} />
      </ContentLayout>
    </Layout>
  )
}

export default Content
