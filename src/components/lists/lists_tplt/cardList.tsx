import { Link } from "gatsby"
import React from "react"
import CardDft from "../cards_tplt/cardDft"
/*
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core"

// install Swiper modules
SwiperCore.use([Pagination])


        <SwiperSlide>
          <Card {...card} />
        </SwiperSlide>
*/
interface Props {
  title: string
  subtitle: string
  link: string
  cards: Array<object>
}

const CardList = (props: Props) => {
  const cardItems = props.cards.map(function (card) {
    return (
      <CardDft
        id={card.id}
        title={card.title}
        content={card.content}
        image={card.image}
        image_url={card.image_url}
        author={card.author}
        creation={card.created_at}
        template="mamba"
      />
    )
  })

  return (
    <section>
      <div className="title">
        <p className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
          {props.title}
        </p>
        <p className="text-2xl font-light text-gray-400 hover:text-blue-800 mb-2">
          <Link to={props.link}>{props.subtitle}</Link>
        </p>
      </div>
      {/*
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {cardItems}
      </Swiper>
    */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {cardItems}
      </div>
    </section>
  )
}

export default CardList
