export default function InteractiveMap(props: any) {
  const inactive = "0.2";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 1007" {...props}>
      <path fill="#fff" d="M0 0h1410v1007H0z" />
      // ----- title -----
      <g id="title">
        <text
          x={7.1}
          y={19}
          fill="#001e0d"
          fontFamily="Arial"
          fontSize={20}
          fontWeight="bold"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan>{"SINGAPORE MRT/LRT MAP"}</tspan>
        </text>
      </g>
      // ----- lines -----
      <g id="lines" fill="none" strokeWidth={4}>
        // EWL Line
        <g
          id="ew_line"
          stroke="#009645"
          opacity={
            props.active == "allmaps" || props.active == "ewl"
              ? "1.0"
              : inactive
          }
        >
          <path d="M1227 638v16q0 20 20 20h84" />
          <path d="m1284 523-25 25q-14.14 14.14-14.14 34.14v37q0 20-20 20h-220q-20 0-34.14 14.14l-182 182q-14.14 14.14-34.14 14.14h-43q-20 0-34.14-14.14l-9-9q-14.14-14.14-14.14-34.14T640.16 758l-230.4-230.4q-14.14-14.14-34.14-14.14H95.02q-20 0-20 20v82" />
        </g>
        // NSL Line
        <path
          id="ns_line"
          stroke="#d42e12"
          d="M286 514V107q0-20 20-20h391.5q20 0 34.4 14.4l40 40q14.4 14.14 14.14 34.14v255q0 20-14.14 34.14l-104 104q-14.14 14.14 0 28.28l162 162q14.14 14.14 0 28.28l-29.7 29.7q-14.14 14.14-14.14 20v125"
          opacity={
            props.active == "allmaps" || props.active == "nsl"
              ? "1.0"
              : inactive
          }
        />
        // NEL Line
        <path
          id="ne_line"
          stroke="#90a"
          d="m582 866 173.2-173.2q14.14-14.14 14.14-28.28v-28q0-20 14.14-34.34l390-390"
          opacity={
            props.active == "allmaps" || props.active == "nel"
              ? "1.0"
              : inactive
          }
        />
        // CCL Line
        <g
          key="cc_line"
          stroke="#fa9e0d"
          opacity={
            props.active == "allmaps" || props.active == "ccl"
              ? "1.0"
              : inactive
          }
        >
          <path d="M754 689q20 0 34.14 14.14l124 124q14.14 14.14 28.28 0" />
          <path d="M582 867a265 265 0 1 1 211 47" />
        </g>
        // DTL Line
        <g
          id="dt_line"
          stroke="#005ec4"
          opacity={
            props.active == "allmaps" || props.active == "dtl"
              ? "1.0"
              : inactive
          }
        >
          <path d="M479 225v157q0 20 14.14 34.14l48.5 48.5q14.14 14.14 34.14 14.14h56q20 0 34.14 14.14l284 284q13 14.14 0 30c-16.1 22.6-47.3 54.9-93.9 80q-20.34 9-41.1-10l-121-121" />
          <path d="M698 760c-9.427-9.427-9.427-18.853 0-28.28l10-10c9.427-9.427 18.853-14.14 28.28-14.14h61c13.333 0 24.713-4.713 34.14-14.14l99-99c9.427-9.427 20.807-14.14 34.14-14.14h301.5c13.333 0 20 6.667 20 20v74.603" />
        </g>
        // TEL Line
        <path
          id="te_line"
          stroke="#784008"
          d="m496 34 147.8 147.8q14.14 14.14 14.14 34.14v557q0 20 14.14 34.14l132 132q14.14 14.14 34.14 14.14h40"
          opacity={
            props.active == "allmaps" || props.active == "tel"
              ? "1.0"
              : inactive
          }
        />
        // LRT Line
        <g
          id="lrt_line"
          stroke="#999"
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <path d="M284.4 225.6h207q10 0 17.07-7.07l19.2-19.2q7.07-7.07 17.07-7.07h10q10 0 10 10v46.6q0 10-10 10h-10q-10 0-17.07-7.07l-19.2-19.2q-7.07-7.07-17.07-7.07M1081 306l-7.76-7.76q-7.07-7.07-7.07-17.07v-20q0-10-7.07-17.07l-19-19q-7.07-7.07-14.14 0l-26 26q-7.07 7.07 0 14.14l19 19q7.07 7.07 17.07 7.07h20q10 0 17.07 7.07M1081 306l7.76 7.76q7.07 7.07 7.07 17.07v20q0 10 7.07 17.07l19 19q7.07 7.07 14.14 0l26-26q7.07-7.07 0-14.14l-19-19q-7.07-7.07-17.07-7.07h-20q-10 0-17.07-7.07M1176 209.5l-7.76-7.76q-7.07-7.07-7.07-17.07v-20q0-10-7.07-17.07l-19-19q-7.07-7.07-14.14 0l-26 26q-7.07 7.07 0 14.14l19 19q7.07 7.07 17.07 7.07h20q10 0 17.07 7.07M1177 209.5l7.76 7.76q7.07 7.07 7.07 17.07v20q0 10 7.07 17.07l19 19q7.07 7.07 14.14 0l26-26q7.07-7.07 0-14.14l-19-19q-7.07-7.07-17.07-7.07h-20q-10 0-17.07-7.07" />
        </g>
      </g>
      // ----- stations -----
      <g id="stations" fill="#fff" strokeWidth={2}>
        //EWL Station
        <g
          id="ew_station"
          stroke="#009645"
          opacity={
            props.active == "allmaps" || props.active == "ewl"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={1334} cy={674} r={3} />
          <circle cx={1283} cy={524.5} r={3} />
          <circle cx={1245} cy={614} r={3} />
          <circle cx={1186} cy={639} r={3} />
          <circle cx={1126} cy={639} r={3} />
          <circle cx={1066} cy={639} r={3} />
          <circle cx={984} cy={643} r={3} />
          <circle cx={946} cy={678} r={3} />
          <circle cx={926} cy={698} r={3} />
          <circle cx={698.5} cy={848} r={3} />
          <circle cx={630} cy={748} r={3} />
          <circle cx={595.5} cy={714} r={3} />
          <circle cx={554.7} cy={673} r={3} />
          <circle cx={519} cy={637} r={3} />
          <circle cx={451} cy={570} r={3} />
          <circle cx={407} cy={526} r={3} />
          <circle cx={247} cy={514} r={3} />
          <circle cx={202} cy={514} r={3} />
          <circle cx={155} cy={514} r={3} />
          <circle cx={120} cy={514} r={3} />
          <circle cx={90} cy={514} r={3} />
          <circle cx={75} cy={542} r={3} />
          <circle cx={75} cy={570} r={3} />
          <circle cx={75} cy={598} r={3} />
          <circle cx={75} cy={616} r={3} />
        </g>
        // NSL Station
        <g
          id="ns_station"
          stroke="#d42e12"
          opacity={
            props.active == "allmaps" || props.active == "nsl"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={286} cy={413} r={3} />
          <circle cx={286} cy={351} r={3} />
          <circle cx={286} cy={173} r={3} />
          <circle cx={352} cy={87} r={3} />
          <circle cx={435} cy={87} r={3} />
          <circle cx={612} cy={87} r={3} />
          <circle cx={685} cy={87} r={3} />
          <circle cx={735} cy={104} r={3} />
          <circle cx={775} cy={144} r={3} />
          <circle cx={786} cy={202} r={3} />
          <circle cx={786} cy={250} r={3} />
          <circle cx={786} cy={300} r={3} />
          <circle cx={786} cy={428} r={3} />
          <circle cx={770} cy={467} r={3} />
          <circle cx={739} cy={498} r={3} />
          <circle cx={702} cy={632} r={3} />
          <circle cx={786} cy={962} r={3} />
        </g>
        // NEL Station
        <g
          id="ne_station"
          stroke="#90a"
          opacity={
            props.active == "allmaps" || props.active == "nel"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={723.5} cy={724.5} r={3} />
          <circle cx={807.5} cy={578.4} r={3} />
          <circle cx={833} cy={553} r={3} />
          <circle cx={861} cy={525} r={3} />
          <circle cx={888} cy={498} r={3} />
          <circle cx={956} cy={430} r={3} />
          <circle cx={988} cy={398.5} r={3} />
          <circle cx={1018} cy={368} r={3} />
        </g>
        // CCL Station
        <g
          id="cc_station"
          stroke="#fa9e0d"
          opacity={
            props.active == "allmaps" || props.active == "ccl"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={824} cy={739} r={3} />
          <circle cx={870} cy={785} r={3} />
          <circle cx={980} cy={766} r={3} />
          <circle cx={997} cy={720} r={3} />
          <circle cx={1002} cy={695} r={3} />
          <circle cx={1005} cy={670} r={3} />
          <circle cx={984.5} cy={552} r={3} />
          <circle cx={964} cy={514} r={3} />
          <circle cx={859} cy={418} r={3} />
          <circle cx={721} cy={390.8} r={3} />
          <circle cx={601} cy={429} r={3} />
          <circle cx={515.5} cy={514} r={3} />
          <circle cx={497} cy={549} r={3} />
          <circle cx={475.7} cy={637} r={3} />
          <circle cx={476} cy={674} r={3} />
          <circle cx={481} cy={709} r={3} />
          <circle cx={493.5} cy={750} r={3} />
          <circle cx={513.8} cy={792} r={3} />
          <circle cx={540} cy={827.5} r={3} />
        </g>
        // DTL Station
        <g
          id="dt_station"
          stroke="#005ec4"
          opacity={
            props.active == "allmaps" || props.active == "dtl"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={479} cy={265} r={3} />
          <circle cx={479} cy={297} r={3} />
          <circle cx={479} cy={329} r={3} />
          <circle cx={479} cy={361} r={3} />
          <circle cx={485} cy={406} r={3} />
          <circle cx={502} cy={425} r={3} />
          <circle cx={524} cy={447.5} r={3} />
          <circle cx={818} cy={645} r={3} />
          <circle cx={804} cy={866} r={3} />
          <circle cx={742} cy={803} r={3} />
          <circle cx={703.5} cy={727} r={3} />
          <circle cx={832} cy={693} r={3} />
          <circle cx={865} cy={659.8} r={3} />
          <circle cx={896} cy={629} r={3} />
          <circle cx={927} cy={598} r={3} />
          <circle cx={965} cy={580} r={3} />
          <circle cx={1046} cy={580} r={3} />
          <circle cx={1089} cy={580} r={3} />
          <circle cx={1129} cy={580} r={3} />
          <circle cx={1172.5} cy={580} r={3} />
          <circle cx={1211} cy={580} r={3} />
          <circle cx={1286} cy={612} r={3} />
          <circle cx={1286} cy={647} r={3} />
        </g>
        // TEL Station
        <g
          id="te_station"
          stroke="#784008"
          opacity={
            props.active == "allmaps" || props.active == "tel"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={496} cy={34} r={3} />
          <circle cx={589} cy={127} r={3} />
          <circle cx={624} cy={161.8} r={3} />
          <circle cx={658} cy={208} r={3} />
          <circle cx={658} cy={247} r={3} />
          <circle cx={658} cy={309} r={3} />
          <circle cx={658} cy={357} r={3} />
          <circle cx={658} cy={444} r={3} />
          <circle cx={658} cy={517} r={3} />
          <circle cx={658} cy={549} r={3} />
          <circle cx={658} cy={648} r={3} />
          <circle cx={658} cy={694} r={3} />
          <circle cx={690} cy={825} r={3} />
          <circle cx={745} cy={881} r={3} />
          <circle cx={880} cy={953} r={3} />
        </g>
        <g id="interchange_station" stroke="#000" strokeWidth={3}>
          <circle
            id="dhoby_station"
            cx={760.2}
            cy={689}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="marinaBay_station"
            cx={786}
            cy={916}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="bayfront_station"
            cx={887}
            cy={871}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="promenade_station"
            cx={953.3}
            cy={806}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="payalebar_station"
            cx={1005}
            cy={639}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="macpherson_station"
            cx={995}
            cy={580}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="serangoon_station"
            cx={923}
            cy={463.2}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="bishan_station"
            cx={786}
            cy={394}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="caldecott_station"
            cx={658}
            cy={402.8}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="botanics_station"
            cx={548}
            cy={471.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="buona_station"
            cx={481}
            cy={599}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="harbourfront_station"
            cx={581}
            cy={866}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="expo_station"
            cx={1286}
            cy={674}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="tampines_station"
            cx={1245}
            cy={580.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="tanahMerah_station"
            cx={1227}
            cy={639}
            r={6}
            opacity={
              props.active == "allmaps" || props.active == "ewl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="bugis_station"
            cx={899}
            cy={726}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="cityHall_station"
            cx={830.3}
            cy={790}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="rafflesPlace_station"
            cx={799}
            cy={822}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="outramPark_station"
            cx={657}
            cy={790.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nel" ||
              props.active == "tel"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="jurongEast_station"
            cx={286}
            cy={514}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="chinatown_station"
            cx={693.5}
            cy={754}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="littleIndia_station"
            cx={780}
            cy={606.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="serangoon_station"
            cx={1080.7}
            cy={305.3}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="punggol_station"
            cx={1177}
            cy={209.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="cck_station"
            cx={286}
            cy={225.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="woodlands_station"
            cx={549}
            cy={87}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="newton_station"
            cx={705}
            cy={532}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="orchard_station"
            cx={660}
            cy={586}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="bukitPanjang_station"
            cx={479}
            cy={225.5}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          />
          <circle
            id="stevens_station"
            cx={658}
            cy={486}
            r={6}
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          />
        </g>
        // LRT Stations
        <g
          id="bplrt_station"
          stroke="#999"
          strokeWidth={1.7}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={321} cy={226} r={2.6} />
          <circle cx={356} cy={226} r={2.6} />
          <circle cx={391} cy={226} r={2.6} />
          <circle cx={426} cy={226} r={2.6} />
          <circle cx={521} cy={245} r={2.6} />
          <circle cx={546} cy={259} r={2.6} />
          <circle cx={565} cy={248} r={2.6} />
          <circle cx={565} cy={226} r={2.6} />
          <circle cx={565} cy={204} r={2.6} />
          <circle cx={546} cy={192} r={2.6} />
          <circle cx={521} cy={206} r={2.6} />
        </g>
        <g
          id="stclrt_station"
          stroke="#999"
          strokeWidth={1.7}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={1127} cy={321} r={2.6} />
          <circle cx={1154} cy={339} r={2.6} />
          <circle cx={1151} cy={372} r={2.6} />
          <circle cx={1113} cy={377.3} r={2.6} />
          <circle cx={1095.5} cy={348.5} r={2.6} />
          <circle cx={1066.5} cy={273.5} r={2.6} />
          <circle cx={1061.4} cy={247} r={2.6} />
          <circle cx={1044} cy={229} r={2.6} />
          <circle cx={1022} cy={229} r={2.6} />
          <circle cx={1002} cy={249} r={2.6} />
          <circle cx={1003.5} cy={269.5} r={2.6} />
          <circle cx={1018.7} cy={284.5} r={2.6} />
          <circle cx={1047} cy={291.5} r={2.6} />
        </g>
        <g
          id="pgllrt_station"
          stroke="#999"
          strokeWidth={1.7}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <circle cx={1191.7} cy={247.3} r={2.6} />
          <circle cx={1198} cy={270} r={2.6} />
          <circle cx={1215} cy={287} r={2.6} />
          <circle cx={1245} cy={277.7} r={2.6} />
          <circle cx={1254} cy={246.5} r={2.6} />
          <circle cx={1238} cy={230.5} r={2.6} />
          <circle cx={1214} cy={224} r={2.6} />
          <circle cx={1161} cy={177} r={2.6} />
          <circle cx={1156} cy={150} r={2.6} />
          <circle cx={1139} cy={132} r={2.6} />
          <circle cx={1106} cy={144} r={2.6} />
          <circle cx={1098.5} cy={173} r={2.6} />
          <circle cx={1115.5} cy={190} r={2.6} />
          <circle cx={1141} cy={194.5} r={2.6} />
        </g>
      </g>
      // ----- labels -----
      <g id="labels" fontFamily="Arial">
        // EWL Label
        <g
          id="ew_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "ewl"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={1310}
            y={687}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Changi"}</tspan>
          </text>
          <text
            x={1312}
            y={699}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Airport"}</tspan>
          </text>
          <text
            x={1289}
            y={522}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Pasir Ris"}</tspan>
          </text>
          <text
            x={1209}
            y={617}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Simei"}</tspan>
          </text>
          <text
            x={1171}
            y={652}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bedok"}</tspan>
          </text>
          <text
            x={1092}
            y={633}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kembangan"}</tspan>
          </text>
          <text
            x={1050}
            y={652}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Eunos"}</tspan>
          </text>
          <text
            x={945}
            y={638}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Aljunied"}</tspan>
          </text>
          <text
            x={954}
            y={682}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kallang"}</tspan>
          </text>
          <text
            x={875}
            y={693}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lavender"}</tspan>
          </text>
          <text
            x={650}
            y={857}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tanjong"}</tspan>
          </text>
          <text
            x={660}
            y={869}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Pagar"}</tspan>
          </text>
          <text
            x={595}
            y={753}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tiong"}</tspan>
          </text>
          <text
            x={593}
            y={765}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bahru"}</tspan>
          </text>
          <text
            x={554}
            y={721}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Redhill"}</tspan>
          </text>
          <text
            x={561}
            y={672.5}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Queenstown"}</tspan>
          </text>
          <text
            x={525}
            y={636}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Commonwealth"}</tspan>
          </text>
          <text
            x={418}
            y={581}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Dover"}</tspan>
          </text>
          <text
            x={414}
            y={526}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Clementi"}</tspan>
          </text>
          <text
            x={224}
            y={527}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Chinese"}</tspan>
          </text>
          <text
            x={226}
            y={539}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Garden"}</tspan>
          </text>
          <text
            x={178}
            y={508}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lakeside"}</tspan>
          </text>
          <text
            x={122}
            y={496}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Boon"}</tspan>
          </text>
          <text
            x={131}
            y={508}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lay"}</tspan>
          </text>
          <text
            x={100}
            y={527}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Pioneer"}</tspan>
          </text>
          <text
            x={80}
            y={496}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Joo "}</tspan>
          </text>
          <text
            x={76}
            y={508}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Koon "}</tspan>
          </text>
          <text
            x={15}
            y={546}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Gul Circle"}</tspan>
          </text>
          <text
            x={41}
            y={566}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tuas"}</tspan>
          </text>
          <text
            x={19}
            y={578}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Crescent"}</tspan>
          </text>
          <text
            x={10}
            y={596}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tuas West"}</tspan>
          </text>
          <text
            x={39}
            y={608}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Road"}</tspan>
          </text>
          <text
            x={15}
            y={620}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tuas Link"}</tspan>
          </text>
        </g>
        // NSL Label
        <g
          id="ns_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "nsl"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={292}
            y={411}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bukit"}</tspan>
          </text>
          <text
            x={292}
            y={423}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Batok"}</tspan>
          </text>
          <text
            x={292}
            y={350}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bukit"}</tspan>
          </text>
          <text
            x={292}
            y={362}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Gombak"}</tspan>
          </text>
          <text
            x={292}
            y={175}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Yew Tee"}</tspan>
          </text>
          <text
            x={335.5}
            y={80}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kranji"}</tspan>
          </text>
          <text
            x={410}
            y={80}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Marsiling"}</tspan>
          </text>
          <text
            x={586}
            y={80}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Admiralty"}</tspan>
          </text>
          <text
            x={650}
            y={80}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Sembawang"}</tspan>
          </text>
          <text
            x={742}
            y={108}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Canberra"}</tspan>
          </text>
          <text
            x={730}
            y={151}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Yishun"}</tspan>
          </text>
          <text
            x={746}
            y={205}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Khatib"}</tspan>
          </text>
          <text
            x={763}
            y={246}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Yio"}</tspan>
          </text>
          <text
            x={727}
            y={258}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Chu Kang"}</tspan>
          </text>
          <text
            x={758}
            y={317}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Ang"}</tspan>
          </text>
          <text
            x={742}
            y={329}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Mo Kio"}</tspan>
          </text>
          <text
            x={734}
            y={432}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Braddell"}</tspan>
          </text>
          <text
            x={779}
            y={473}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Toa"}</tspan>
          </text>
          <text
            x={779}
            y={485}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Payoh"}</tspan>
          </text>
          <text
            x={748}
            y={504}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Novena"}</tspan>
          </text>
          <text
            x={709}
            y={634}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Somerset"}</tspan>
          </text>
          <text
            x={745}
            y={972}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Marina"}</tspan>
          </text>
          <text
            x={724}
            y={984}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"South Pier"}</tspan>
          </text>
        </g>
        // NEL Label
        <g
          id="ne_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "nel"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={730}
            y={729}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Clarke"}</tspan>
          </text>
          <text
            x={730}
            y={741}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Quay"}</tspan>
          </text>
          <text
            x={810}
            y={591}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Farrer"}</tspan>
          </text>
          <text
            x={810}
            y={603}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Park"}</tspan>
          </text>
          <text
            x={838}
            y={564}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Boon Keng"}</tspan>
          </text>
          <text
            x={867}
            y={532}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Potong Pasir"}</tspan>
          </text>
          <text
            x={893}
            y={509}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Woodleigh"}</tspan>
          </text>
          <text
            x={961}
            y={441}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kovan"}</tspan>
          </text>
          <text
            x={996}
            y={403}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Hougang"}</tspan>
          </text>
          <text
            x={962}
            y={365}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Buangkok"}</tspan>
          </text>
        </g>
        // CCL Label
        <g
          id="cc_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "ccl"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={830}
            y={727}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bras"}</tspan>
          </text>
          <text
            x={830}
            y={739}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Basah"}</tspan>
          </text>
          <text
            x={872}
            y={779}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Esplanade"}</tspan>
          </text>
          <text
            x={950}
            y={748}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Nicoll"}</tspan>
          </text>
          <text
            x={934}
            y={760}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Highway"}</tspan>
          </text>
          <text
            x={1004}
            y={726}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Stadium"}</tspan>
          </text>
          <text
            x={1008}
            y={700}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Mountbatten"}</tspan>
          </text>
          <text
            x={1011}
            y={674}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Dakota"}</tspan>
          </text>
          <text
            x={989}
            y={556}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tai Seng"}</tspan>
          </text>
          <text
            x={968}
            y={514}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bartley"}</tspan>
          </text>
          <text
            x={879}
            y={413}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lorong"}</tspan>
          </text>
          <text
            x={879}
            y={425}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Chuan"}</tspan>
          </text>
          <text
            x={690}
            y={383}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Marymount"}</tspan>
          </text>
          <text
            x={522}
            y={520}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Farrer Road"}</tspan>
          </text>
          <text
            x={504}
            y={556}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Holland"}</tspan>
          </text>
          <text
            x={504}
            y={568}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Village"}</tspan>
          </text>
          <text
            x={444}
            y={635}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"one-"}</tspan>
          </text>
          <text
            x={441}
            y={645}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"north"}</tspan>
          </text>
          <text
            x={483}
            y={674}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kent"}</tspan>
          </text>
          <text
            x={483}
            y={686}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Ridge"}</tspan>
          </text>
          <text
            x={490}
            y={713}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Haw Par"}</tspan>
          </text>
          <text
            x={490}
            y={725}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Villa"}</tspan>
          </text>
          <text
            x={458}
            y={758}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Pasir"}</tspan>
          </text>
          <text
            x={442}
            y={770}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Panjang"}</tspan>
          </text>
          <text
            x={458}
            y={798}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Labrador"}</tspan>
          </text>
          <text
            x={483}
            y={810}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Park"}</tspan>
          </text>
          <text
            x={504}
            y={834}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Telok"}</tspan>
          </text>
          <text
            x={488}
            y={846}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Blangah"}</tspan>
          </text>
        </g>
        // DTL Label
        <g
          id="dt_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "dtl"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={430.5}
            y={269}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Cashew"}</tspan>
          </text>
          <text
            x={433}
            y={301}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Hillview"}</tspan>
          </text>
          <text
            x={436}
            y={358}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Beauty"}</tspan>
          </text>
          <text
            x={442}
            y={370}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"World"}</tspan>
          </text>
          <text
            x={415}
            y={396}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"King Albert"}</tspan>
          </text>
          <text
            x={450}
            y={408}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Park"}</tspan>
          </text>
          <text
            x={503}
            y={407}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Sixth"}</tspan>
          </text>
          <text
            x={503}
            y={419}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Avenue"}</tspan>
          </text>
          <text
            x={529}
            y={434}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tan"}</tspan>
          </text>
          <text
            x={529}
            y={446}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kah Kee"}</tspan>
          </text>
          <text
            x={775}
            y={655}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Rochor"}</tspan>
          </text>
          <text
            x={809}
            y={865}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Downtown"}</tspan>
          </text>
          <text
            x={747}
            y={789}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Telok"}</tspan>
          </text>
          <text
            x={747}
            y={801}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Ayer"}</tspan>
          </text>
          <text
            x={685}
            y={708}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Fort"}</tspan>
          </text>
          <text
            x={662}
            y={720}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Canning"}</tspan>
          </text>
          <text
            x={780}
            y={686}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bencoolen"}</tspan>
          </text>
          <text
            x={874}
            y={660}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Jalan"}</tspan>
          </text>
          <text
            x={874}
            y={671}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Besar"}</tspan>
          </text>
          <text
            x={825}
            y={632}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bendeemer"}</tspan>
          </text>
          <text
            x={882}
            y={582}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Geylang"}</tspan>
          </text>
          <text
            x={895}
            y={594}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bahru"}</tspan>
          </text>
          <text
            x={951.5}
            y={595}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Mattar"}</tspan>
          </text>
          <text
            x={1036}
            y={575}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Ubi"}</tspan>
          </text>
          <text
            x={1077}
            y={595}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kaki"}</tspan>
          </text>
          <text
            x={1075}
            y={607}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bukit"}</tspan>
          </text>
          <text
            x={1110}
            y={562}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bedok"}</tspan>
          </text>
          <text
            x={1112}
            y={574}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"North"}</tspan>
          </text>
          <text
            x={1157}
            y={595}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bedok"}</tspan>
          </text>
          <text
            x={1149}
            y={607}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Reservoir"}</tspan>
          </text>
          <text
            x={1184}
            y={562}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tampines"}</tspan>
          </text>
          <text
            x={1196}
            y={574}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"West"}</tspan>
          </text>
          <text
            x={1292}
            y={609}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tampines"}</tspan>
          </text>
          <text
            x={1292}
            y={621}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"East"}</tspan>
          </text>
          <text
            x={1292}
            y={643}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Upper"}</tspan>
          </text>
          <text
            x={1292}
            y={655}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Changi"}</tspan>
          </text>
        </g>
        // TEL Label
        <g
          id="te_label"
          fontSize={12}
          opacity={
            props.active == "allmaps" || props.active == "tel"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={450}
            y={29}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Woodlands North"}</tspan>
          </text>
          <text
            x={596}
            y={119}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Woodlands"}</tspan>
          </text>
          <text
            x={596}
            y={131}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"South"}</tspan>
          </text>
          <text
            x={632}
            y={163}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Springleaf"}</tspan>
          </text>
          <text
            x={665}
            y={212}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lentor"}</tspan>
          </text>
          <text
            x={665}
            y={250}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Mayflower"}</tspan>
          </text>
          <text
            x={622}
            y={292}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bright"}</tspan>
          </text>
          <text
            x={637}
            y={304}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Hill"}</tspan>
          </text>
          <text
            x={621}
            y={354}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Upper"}</tspan>
          </text>
          <text
            x={604}
            y={366}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Thomson"}</tspan>
          </text>
          <text
            x={617}
            y={520}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Napier"}</tspan>
          </text>
          <text
            x={610}
            y={546}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Orchard"}</tspan>
          </text>
          <text
            x={599}
            y={558}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Boulevard"}</tspan>
          </text>
          <text
            x={622}
            y={647}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Great"}</tspan>
          </text>
          <text
            x={621}
            y={659}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"World"}</tspan>
          </text>
          <text
            x={603}
            y={697}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Havelock"}</tspan>
          </text>
          <text
            x={694}
            y={827}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Maxwell"}</tspan>
          </text>
          <text
            x={736}
            y={863}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Shenton"}</tspan>
          </text>
          <text
            x={746}
            y={875}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Way"}</tspan>
          </text>
          <text
            x={876}
            y={968}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Gardens"}</tspan>
          </text>
          <text
            x={876}
            y={980}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"by the Bay"}</tspan>
          </text>
        </g>
        // Interchanges
        <g id="interchange_label" fontSize={12} fontWeight="bold">
          <g
            id="dhoby_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={708}
              y={686}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Dhoby"}</tspan>
            </text>
            <text
              x={709}
              y={698}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Ghaut"}</tspan>
            </text>
          </g>
          <g
            id="marinaBay_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={789}
              y={895}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Marina"}</tspan>
            </text>
            <text
              x={789}
              y={907}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Bay"}</tspan>
            </text>
          </g>
          <g
            id="bayfront_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={885}
              y={888}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Bayfront"}</tspan>
            </text>
          </g>
          <g
            id="promenade_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={886}
              y={797}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Promenade"}</tspan>
            </text>
          </g>
          <g
            id="payalebar_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1010}
              y={621}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Paya"}</tspan>
            </text>
            <text
              x={1010}
              y={633}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Lebar"}</tspan>
            </text>
          </g>
          <g
            id="macpherson_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1001}
              y={594}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"MacPherson"}</tspan>
            </text>
          </g>
          <g
            id="serangoon_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={933}
              y={468}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Serangoon"}</tspan>
            </text>
          </g>
          <g
            id="bishan_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "nsl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={793}
              y={390}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Bishan"}</tspan>
            </text>
          </g>
          <g
            id="botanics_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={491}
              y={470}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Botanic"}</tspan>
            </text>
            <text
              x={486}
              y={482}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Gardens"}</tspan>
            </text>
          </g>

          <g
            id="buona_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={489}
              y={600}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Buona Vista"}</tspan>
            </text>
          </g>
          <g
            id="harbourfront_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "nel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={495}
              y={875}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"HarbourFront"}</tspan>
            </text>
          </g>
          <g
            id="expo_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1252}
              y={687}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Expo"}</tspan>
            </text>
          </g>
          <g
            id="tampines_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1250}
              y={574}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Tampines"}</tspan>
            </text>
          </g>
          <g
            id="tanahMerah_label"
            opacity={
              props.active == "allmaps" || props.active == "ewl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1235}
              y={650}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Tanah"}</tspan>
            </text>
            <text
              x={1235}
              y={662}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Merah"}</tspan>
            </text>
          </g>
          <g
            id="bugis_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={908}
              y={730}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Bugis"}</tspan>
            </text>
          </g>
          <g
            id="cityHall_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={840}
              y={799}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"City"}</tspan>
            </text>
            <text
              x={840}
              y={811}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Hall"}</tspan>
            </text>
          </g>
          <g
            id="rafflesPlace_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={808}
              y={831}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Raffles"}</tspan>
            </text>
            <text
              x={808}
              y={843}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Place"}</tspan>
            </text>
          </g>
          <g
            id="outramPark_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nel" ||
              props.active == "tel"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={605}
              y={782}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Outram"}</tspan>
            </text>
            <text
              x={621}
              y={794}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Park"}</tspan>
            </text>
          </g>
          <g
            id="jurongEast_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "ewl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={292}
              y={495}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Jurong"}</tspan>
            </text>
            <text
              x={292}
              y={508}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"East"}</tspan>
            </text>
          </g>
          <g
            id="cck_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={247}
              y={213}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Choa"}</tspan>
            </text>
            <text
              x={221}
              y={225}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Chu Kang"}</tspan>
            </text>
          </g>
          <g
            id="newton_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={714}
              y={536}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Newton"}</tspan>
            </text>
          </g>
          <g
            id="woodlands_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={480}
              y={100}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Woodlands"}</tspan>
            </text>
          </g>
          <g
            id="chinatown_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={702}
              y={758}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Chinatown"}</tspan>
            </text>
          </g>
          <g
            id="littleIndia_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "dtl" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={739}
              y={605}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Little"}</tspan>
            </text>
            <text
              x={738}
              y={617}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"India"}</tspan>
            </text>
          </g>
          <g
            id="sengkang_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1013}
              y={309}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Sengkang"}</tspan>
            </text>
          </g>
          <g
            id="punggol_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "nel"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={1117}
              y={215}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Punggol"}</tspan>
            </text>
          </g>
          <g
            id="bukitPanjang_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "lrt" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={445}
              y={240}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Bukit"}</tspan>
            </text>
            <text
              x={429}
              y={252}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Panjang"}</tspan>
            </text>
          </g>
          <g
            id="caldecott_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "ccl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={595}
              y={399}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Caldecott"}</tspan>
            </text>
          </g>
          <g
            id="stevens_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "dtl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={664}
              y={484}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Stevens"}</tspan>
            </text>
          </g>
          <g
            id="orchard_label"
            opacity={
              props.active == "allmaps" ||
              props.active == "tel" ||
              props.active == "nsl"
                ? "1.0"
                : inactive
            }
          >
            <text
              x={604}
              y={590}
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan>{"Orchard"}</tspan>
            </text>
          </g>
        </g>
        // BPL Label
        <g
          id="bplrt_label"
          fontSize={10}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={307}
            y={211}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"South"}</tspan>
          </text>
          <text
            x={309}
            y={221}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"View"}</tspan>
          </text>
          <text
            x={345}
            y={239}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Keat"}</tspan>
          </text>
          <text
            x={344}
            y={249}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Hong"}</tspan>
          </text>
          <text
            x={380}
            y={239}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Teck"}</tspan>
          </text>
          <text
            x={378}
            y={249}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Whye"}</tspan>
          </text>
          <text
            x={407}
            y={221}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Phoenix"}</tspan>
          </text>
          <text
            x={525}
            y={242}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Petir"}</tspan>
          </text>
          <text
            x={525}
            y={272}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Pending"}</tspan>
          </text>
          <text
            x={569}
            y={251}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bangkit"}</tspan>
          </text>
          <text
            x={569}
            y={229}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Fajar"}</tspan>
          </text>
          <text
            x={569}
            y={207}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Segar"}</tspan>
          </text>
          <text
            x={525}
            y={186}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Jelapang"}</tspan>
          </text>
          <text
            x={525}
            y={215}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Senja"}</tspan>
          </text>
        </g>
        // SKL Label
        <g
          id="stclrt_label"
          fontSize={10}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={1096}
            y={315}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Compassvale"}</tspan>
          </text>
          <text
            x={1155}
            y={335}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Rumbia"}</tspan>
          </text>
          <text
            x={1157}
            y={379}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Bakau"}</tspan>
          </text>
          <text
            x={1071}
            y={384}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kangkar"}</tspan>
          </text>
          <text
            x={1045}
            y={354}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Ranggung"}</tspan>
          </text>
          <text
            x={1071}
            y={273}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Cheng"}</tspan>
          </text>
          <text
            x={1071}
            y={283}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Lim"}</tspan>
          </text>
          <text
            x={1065}
            y={246}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Farmway"}</tspan>
          </text>
          <text
            x={1048}
            y={228}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kupang"}</tspan>
          </text>
          <text
            x={970}
            y={226}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Thanggam"}</tspan>
          </text>
          <text
            x={961}
            y={246}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Fernvale"}</tspan>
          </text>
          <text
            x={974}
            y={277}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Layar"}</tspan>
          </text>
          <text
            x={973}
            y={293}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Tongkang"}</tspan>
          </text>
          <text
            x={1025}
            y={286}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Renjong"}</tspan>
          </text>
        </g>
        // PGL Label
        <g
          id="pgllrt_label"
          fontSize={10}
          opacity={
            props.active == "allmaps" || props.active == "lrt"
              ? "1.0"
              : inactive
          }
        >
          <text
            x={1164}
            y={250}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Cove"}</tspan>
          </text>
          <text
            x={1154}
            y={275}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Meridian"}</tspan>
          </text>
          <text
            x={1160}
            y={293}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Coral Edge"}</tspan>
          </text>
          <text
            x={1252}
            y={282}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Riviera"}</tspan>
          </text>
          <text
            x={1259}
            y={245}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Kadaloor"}</tspan>
          </text>
          <text
            x={1243}
            y={229}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Oasis"}</tspan>
          </text>
          <text
            x={1198}
            y={219}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Damai"}</tspan>
          </text>
          <text
            x={1166}
            y={177}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Sam Kee"}</tspan>
          </text>
          <text
            x={1162}
            y={150}
            fill="#aaa"
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Teck Lee"}</tspan>
          </text>
          <text
            x={1145}
            y={131}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Punggol Point"}</tspan>
          </text>
          <text
            x={1056}
            y={142}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Samudera"}</tspan>
          </text>
          <text
            x={1063}
            y={181}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Nibong"}</tspan>
          </text>
          <text
            x={1075}
            y={198}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Sumang"}</tspan>
          </text>
          <text
            x={1131}
            y={182}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Soo"}</tspan>
          </text>
          <text
            x={1130}
            y={191}
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan>{"Teck"}</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
