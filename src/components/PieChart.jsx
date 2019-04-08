import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import * as d3 from 'd3'
import _ from 'lodash'
import style from '../style/standings.scss'
import nhlStyle from '../style/nhl.scss'
import teamInfo from '../../modules/teams'

function createPie({ data, target, radius, maxPoints }) {
  let teams = Object.keys(data).map(team => ({
    team,
    picks: data[team].picks,
    points: data[team].points,
  }))
  teams = _.sortBy(teams, team => {
    const teamObj = teamInfo[team.team]
    return teamObj.conference + teamObj.division + teamObj.seed
  })
  const pieData = { ...data, teams }

  const arc = d3.svg.arc().outerRadius(radius)

  const pie = d3.layout
    .pie()
    .sort(null)
    .value(d => d.picks)

  const svg = d3
    .select(target)
    .selectAll(style.teamPie)
    .data([pieData])
    .enter()
    .append('svg')
    .attr('class', style.teamPie)
    .attr('width', radius * 2)
    .attr('height', radius * 2)
    .append('g')
    .attr('transform', `translate(${radius},${radius})`)

  const pathFunction = (d, i) => {
    const size = (d.data.points / d.data.picks / maxPoints) * radius
    return arc.innerRadius(radius - Math.max(size, 1))(d, i)
  }

  return svg
    .selectAll('.arc')
    .data(d => pie(d.teams))
    .enter()
    .append('path')
    .attr('class', 'arc')
    .attr('d', pathFunction)
    .attr('class', d => cx(nhlStyle.team, nhlStyle[d.data.team]))
}

export default class PieChart extends React.Component {
  static propTypes = {
    data: PropTypes.shape().isRequired,
    maxPoints: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    onSliceMouseover: PropTypes.func.isRequired,
    onSliceMouseout: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.create()
  }

  shouldComponentUpdate(nextProps) {
    return (
      !_.isEqual(nextProps.maxPoints, this.props.maxPoints) ||
      !_.isEqual(nextProps.data, this.props.data)
    )
  }

  componentWillUnmount() {
    this.destroy()
  }

  create() {
    const arcs = createPie({
      target: this.pie,
      data: this.props.data,
      radius: this.props.radius,
      maxPoints: this.props.maxPoints,
    })

    arcs.on('mouseover', this.props.onSliceMouseover)
    arcs.on('mouseout', this.props.onSliceMouseout)
  }

  destroy() {
    d3.select(this.pie)
      .selectAll(style.pie)
      .remove()
  }

  render() {
    return <div ref={e => (this.pie = e)} />
  }
}
