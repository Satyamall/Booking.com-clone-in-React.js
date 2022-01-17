import style from "./flights.module.css";

export default function Covid() {
  return (
    <div className={style.covid}>
      Coronavirus (COVID-19) may affect your travel plans.{" "}
      <a
        href="https://www.booking.com/covid-19.html?lang=en-us&amp;aid=304142&amp;label=gen173nr-1DEgdmbGlnaHRzKIICQgVpbmRleEgJWARobIgBAZgBCbgBF8gBDNgBA-gBAfgBBogCAagCA7gCvbHxjgbAAgHSAiQ3MGRjYWNmYi1mZWI2LTQ5MTUtYmY5My1mMTJhMzM5OGEwZjPYAgTgAgE"
        target="_blank"
        aria-label="Coronavirus (COVID-19) may affect your travel plans. Learn more"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
}