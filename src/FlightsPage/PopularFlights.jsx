import style from "./flights.module.css";
export default function PopularFlights() {
  return (
    <>
      <div
        className={style.popular}
        style={{ margin: "32px auto", alignItems: "start", width: "100%" }}
      >
        <div className={style.popularContainer}>
          <div className={style.popularTitle}>
            <div className={style.popularTitleBold}>
              Popular flights near you
            </div>
            <div className={style.popularTitleNormal}>
              Find deals on domestic and international flights
            </div>
          </div>
          <div role="region" className={style.CarouselModuleRoot}>
            <ul
              className={style.CarouselModuleInner}
              tabindex="0"
              aria-atomic="false"
            >
              <li className={style.CarouselModuleItem}>
                <a href="https://flights.booking.com/flights/JGA-BOM/?type=ONEWAY&adults=1&cabinClass=ECONOMY&children=&from=JGA&to=BOM&fromCountry=IN&toCountry=IN&fromLocationName=Jamnagar+Airport&toLocationName=Chhatrapati+Shivaji+International+Airport+Mumbai&depart=2022-01-17&sort=BEST&aid=304142&label=gen173rf-1FCAEoggI46AdIM1gDaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGYAiKoAgO4ApCJhY8GwAIB0gIkNDQyNDJkYTUtY2EzMi00MmJmLWE2MmYtY2I5MjZjYTE3ZTU02AIG4AIB">
                  <div style={{ padding: "0" }}>
                    <div>
                      <div
                        style={{
                          width: "100%",
                          paddingTop: "calc(75%)",
                          position: "relative"
                        }}
                      >
                        <div className={style.AspectRatioModuleInner}>
                          <img
                            src="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o="
                            alt="Jamnagar To Mumbai"
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      <div className={style.TextModuleBold}>
                        Jamnagar To Mumbai
                      </div>
                      <div className={style.TextModuleNormal}>
                        Jan 17 · One Way
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className={style.CarouselModuleItem}>
                <a href="https://flights.booking.com/flights/RAJ-DEL/?type=ROUNDTRIP&amp;adults=1&amp;cabinClass=ECONOMY&amp;sort=BEST&amp;depart=2022-01-17&amp;return=2022-01-24&amp;from=RAJ&amp;to=DEL&amp;aid=304142&amp;label=gen173rf-1FCAEoggI46AdIM1gDaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGYAiKoAgO4ApCJhY8GwAIB0gIkNDQyNDJkYTUtY2EzMi00MmJmLWE2MmYtY2I5MjZjYTE3ZTU02AIG4AIB">
                  <div style={{ padding: "0" }}>
                    <div>
                      <div
                        style={{
                          width: "100%",
                          paddingTop: "calc(75%)",
                          position: "relative"
                        }}
                      >
                        <div className={style.AspectRatioModuleInner}>
                          <img
                            src="https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&amp;o="
                            alt="Rajkot to New Delhi"
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      <div className={style.TextModuleBold}>
                        Rajkot to New Delhi
                      </div>
                      <div className={style.TextModuleNormal}>
                        Jan 17 - Jan 24 · Round trip
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className={style.CarouselModuleItem}>
                <a href="https://flights.booking.com/flights/RAJ-BOM/?type=ROUNDTRIP&amp;adults=1&amp;cabinClass=ECONOMY&amp;sort=BEST&amp;depart=2022-01-16&amp;return=2022-01-23&amp;from=RAJ&amp;to=BOM&amp;aid=304142&amp;label=gen173rf-1FCAEoggI46AdIM1gDaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGYAiKoAgO4ApCJhY8GwAIB0gIkNDQyNDJkYTUtY2EzMi00MmJmLWE2MmYtY2I5MjZjYTE3ZTU02AIG4AIB">
                  <div style={{ padding: "0" }}>
                    <div>
                      <div
                        style={{
                          width: "100%",
                          paddingTop: "calc(75%)",
                          position: "relative"
                        }}
                      >
                        <div className={style.AspectRatioModuleInner}>
                          <img
                            src="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o="
                            alt="Rajkot to Mumbai"
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      <div className={style.TextModuleBold}>
                        Rajkot to Mumbai
                      </div>
                      <div className={style.TextModuleNormal}>
                        Jan 16 - Jan 23 · Round trip
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
