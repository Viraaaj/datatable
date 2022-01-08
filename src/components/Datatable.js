// [doc: https://material-table.com/#/docs/install]

import MaterialTable from "material-table";
import datatable from "../datatable.json";

const columns = [
  { title: "index", field: "index" },
  { title: "tug_boat", field: "tug_boat" },
  { title: "length", field: "length" },
  { title: "width", field: "width" },
  { title: "Depth", field: "Depth" },
  { title: "tugboat_requested_date_time", field: "tugboat_requested_date_time" },
  { title: "tugboat_work_start_date_time", field: "tugboat_work_start_date_time" },
  { title: "tugboat_work_end_date_time", field: "tugboat_work_end_date_time" },
  { title: "tug_company", field: "tug_company" },
  { title: "time_delay", field: "time_delay" },
];


const data = [
  { index:"0", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"1", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"2", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"3", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"4", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"5", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"6", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"7", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"8", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"9", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"10", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"11", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"12", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"13", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"14", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"15", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"16", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"17", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"18", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"19", tug_boat: "구36", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
  { index:"20", tug_boat: "aaaa", length:"30.81", width:"9.4", Depth:"4.15", tugboat_requested_date_time:"1625886000000", tugboat_work_start_date_time:"1625884800000", tugboat_work_end_date_time:"2021-07-10 03:30:00", tug_company:"(주)신광", time_delay:"0:00:00" },
];

const Datatable = () => {

  return (
    <div>
      <MaterialTable data={data} columns={columns} title="통계" />
    </div>
  );
};

export default Datatable;
