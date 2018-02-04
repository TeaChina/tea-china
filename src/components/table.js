import React from "react"
import { css } from "glamor"

import { rhythm, scale, options } from "../utils/typography"
import presets, { colors } from "../utils/presets"
import logo from "../monogram.svg"
import { GraphQLIcon, ReactJSIcon } from "../assets/logos"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import FuturaParagraph from "../components/futura-paragraph"
import TechWithIcon from "../components/tech-with-icon"

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import data from '../data/companies'

const stripeColor = `255, 255, 255, 0.9`
const stripeSize = 15
const stripeAnimation = css.keyframes({
  "0%": {
    backgroundPosition: `${rhythm(stripeSize)} ${rhythm(stripeSize * 2)}`,
  },
  "100%": { backgroundPosition: `0 0` },
})
const stripeBg = {
  backgroundColor: colors.ui.whisper,
  backgroundSize: `${rhythm(stripeSize)} ${rhythm(stripeSize)}`,
  backgroundImage: `linear-gradient(45deg, rgba(${stripeColor}) 25%, transparent 25%, transparent 50%, rgba(${stripeColor}) 50%, rgba(${stripeColor}) 75%, transparent 75%, transparent)`,
  animation: `${stripeAnimation} 14s linear infinite`,
}
const lineAnimation = css.keyframes({
  to: {
    strokeDashoffset: 10,
  },
})

const columns = [
  {
    id: 'company',
    Header: props => <b>Company</b>,
    accessor: d => d.company,
    Cell: props => {
      if (props.value.link != '')
        return <a href={props.value.link}>{props.value.name}</a>
      return <b>{props.value.name}</b>
    },
    filterMethod: (filter, row) => {
      if (String(row[filter.id].name).toLowerCase().includes(filter.value.toLowerCase())) {
            return String(row[filter.id]); 
          }
    }

  },
  {
    id: 'valuation', 
    Header: props => <b>Valuation($B)</b>,
    accessor: 'valuation',
    Cell: props => <span className='number'>{props.value}</span>,
    filterMethod: (filter, row) => {
      if (filter.value < row[filter.id]) {
        return row[filter.id];
      }
    }
  }, 
  {
    id: 'founder', 
    Header: props => <b>Founder</b>,
    accessor: 'founder'
  }, 
  {
    Header: props => <b>Industry</b>,
    accessor: 'industry'
  },
  {
    Header: props => <b>Founded</b>,
    accessor: 'founded',
    Cell: props => <span className='number'>{props.value}</span>,
    filterMethod: (filter, row) => {
      if (filter.value < row[filter.id]) {
        return row[filter.id];
      }
    }
  },
  {
    Header: props => <b>Status</b>,
    accessor: 'status'
  }
]


const Segment = ({ className, children }) => (
  <div
    className={`Segment ${className}`}
    css={{
      maxWidth: rhythm(30),
      margin: `0 auto`,
      textAlign: `center`,
    }}
  >
    {children}
  </div>
)

const SegmentTitle = ({ children }) => (
  <h2
    className="Segment-title"
    css={{
      display: `inline`,
      background: colors.accent,
      color: `#fff`,
      borderRadius: presets.radius,
      margin: `0 auto`,
      position: `relative`,
      bottom: `-.5rem`,
      padding: `.35rem .6rem`,
      fontWeight: `normal`,
      letterSpacing: `.5px`,
      ...scale(-2 / 5),
      lineHeight: 1,
      textTransform: `uppercase`,
      transform: `translateZ(0)`,
    }}
  >
    {children}
  </h2>
)

const VerticalLine = () => (
  <svg
    width="20"
    height="30"
    viewBox="0 0 20 30"
    css={{ margin: `0 auto`, display: `block` }}
  >
    <path
      d="M10 40 L10 -10"
      css={{
        stroke: colors.lilac,
        strokeWidth: `3`,
        strokeLinecap: `round`,
        strokeDasharray: `0.5 10`,
        animation: `${lineAnimation} 400ms linear infinite`,
      }}
    />
  </svg>
)

const box = {
  border: `1px solid ${colors.ui.light}`,
  borderRadius: presets.radiusLg,
  padding: `${rhythm(1)} ${rhythm(1)} 0`,
  background: colors.ui.whisper,
}

const borderAndBoxShadow = {
  border: `1px solid ${colors.ui.light}`,
  background: `#fff`,
  width: `100%`,
  boxShadow: `0 5px 15px rgba(0,0,0,0.035)`,
  borderRadius: presets.radius,
  transform: `translateZ(0)`,
}

const SourceItems = ({ children }) => (
  <div
    css={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      ...box,
    }}
  >
    {children}
  </div>
)

const boxPadding = { padding: `${rhythm(1 / 3)} ${rhythm(2 / 4)}` }

const SourceItem = ({ children }) => (
  <div
    css={{
      boxSizing: `border-box`,
      padding: `0 ${rhythm(2 / 3)} ${rhythm(1)}`,
      display: `flex`,
      [presets.Mobile]: {
        flex: `1 1 50%`,
      },
      [presets.Phablet]: {
        flex: `1 1 33%`,
      },
    }}
  >
    <div
      css={{
        ...borderAndBoxShadow,
        ...boxPadding,
        lineHeight: 1.2,
        textAlign: `left`,
      }}
    >
      {children}
    </div>
  </div>
)

const ItemTitle = ({ children }) => (
  <h3
    css={{
      color: colors.gatsby,
      margin: 0,
      fontStyle: `normal`,
      ...scale(0),
    }}
  >
    {children}
  </h3>
)

const ItemDescription = ({ children }) => (
  <small
    css={{
      lineHeight: 1.2,
      display: `block`,
      color: colors.lilac,
      [presets.Hd]: {
        fontSize: scale(-1 / 5).fontSize,
      },
    }}
  >
    {children}
  </small>
)

const Gatsby = ({ children }) => (
  <div
    css={{
      ...borderAndBoxShadow,
      padding: rhythm(1),
      margin: `0 auto`,
      width: rhythm(5.5),
      height: rhythm(5.5),
      [presets.Desktop]: {
        width: rhythm(6),
        height: rhythm(6),
      },
    }}
  >
    <img
      src={logo}
      css={{
        display: `inline-block`,
        height: rhythm(1.75),
        width: rhythm(1.75),
        [presets.Desktop]: {
          width: rhythm(2.25),
          height: rhythm(2.25),
        },
        margin: 0,
        verticalAlign: `middle`,
      }}
      alt="Gatsby"
    />
    <ItemDescription>
      <small
        css={{
          marginTop: `.25rem`,
          display: `block`,
        }}
      >
        powered by
      </small>
      <span
        css={{
          color: colors.gatsby,
        }}
      >
        <TechWithIcon icon={GraphQLIcon}>GraphQL</TechWithIcon>
      </span>
    </ItemDescription>
  </div>
)

const Diagram = ({ containerCSS }) => (
  <section
    className="Diagram"
    css={{
      borderRadius: presets.radiusLg,
      fontFamily: options.headerFontFamily.join(`,`),
      padding: vP,
      marginTop: rhythm(1),
      textAlign: `center`,
      ...containerCSS,
      [presets.Tablet]: {
        marginTop: 0,
      },
    }}
  >
    <h1 css={{ marginBottom: rhythm(1.5), ...scale(0.9) }}>The panda<em css={{ color: colors.gatsby, fontStyle: `normal` }}>x</em> Dentmakers Index</h1>
    <div css={{ maxWidth: rhythm(30), margin: `0 auto ${rhythm(2)}` }}>
      <FuturaParagraph>
        The pandax Dentmakers Index is a daily ranking of China's largest technology companies.  Data for companies already on the leaderboard is updated when there is a new funding or valuation. Valuations credibly reported but not officially confirmed are marked with an asterisk.
        Please reach out to <em css={{ color: colors.gatsby, fontStyle: `normal` }}>feedback@crunchbase.com</em> if a company is missing or if data needs updating.
      </FuturaParagraph>
    </div>

    <Segment className="Source">
      <SegmentTitle>Statistics</SegmentTitle>
      <SourceItems>
        <SourceItem>
          <ItemTitle>88</ItemTitle>
          <ItemDescription>Companies</ItemDescription>
        </SourceItem>
        <SourceItem>
          <ItemTitle>$1,500.54B</ItemTitle>
          <ItemDescription>Total Valuation</ItemDescription>
        </SourceItem>
        <SourceItem>
          <ItemTitle>20</ItemTitle>
          <ItemDescription>
            Public Companies
          </ItemDescription>
        </SourceItem>
      </SourceItems>
    </Segment>

    <Segment className="Table">
      <div
        css={{
          marginBottom: rhythm(1),
        }}
      ></div>
      <ReactTable
        data={data}
        columns={columns}
        css={{
          maxHeight: "700px",
          [presets.MiniMobile]: {
            maxWidth: "290px"
          },
          [presets.Mobile]: {
            maxWidth: "320px"
          },
          [presets.Desktop]: {
            maxWidth: "1000px"
          },
          
        }}
        filterable
        defaultFilterMethod={(filter, row) => {
          if (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
            return String(row[filter.id]); 
          }
        }
        defaultSorted={[
          {
            id: "valudation",
            desc: false
          }
        ]}
        defaultPageSize={10}
        minRows={0}
        className="-striped -highlight"
      />    
    </Segment>
  </section>
)

export default Diagram
