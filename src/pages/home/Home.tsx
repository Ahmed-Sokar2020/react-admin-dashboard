import React from "react";
import BoxSkeleton from "../../components/boxSkeleton/BoxSkeleton";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  lineChartBoxConversion,
  lineChartBoxProduct,
  lineChartBoxRevenue,
  lineChartBoxUser,
} from "../../data";

import "./home.scss";

import { lazy, Suspense } from "react";

// Lazy components
const PieChartBox = lazy(
  () => import("../../components/pieChartBox/PieChartBox"),
);
const LineChartBox = lazy(
  () => import("../../components/lineChartBox/LineChartBox"),
);
const BarChartBox = lazy(
  () => import("../../components/barChartBox/BarChartBox"),
);
const AreaChartBox = lazy(
  () => import("../../components/areaChartBox/AreaChartBox"),
);
const TopBox = lazy(() => import("../../components/topBox/TopBox"));

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Suspense fallback={<BoxSkeleton />}>
          <TopBox />
        </Suspense>
      </div>

      <div className="box box2">
        <Suspense fallback={<BoxSkeleton />}>
          <AreaChartBox />
        </Suspense>
      </div>

      <div className="box box3">
        <Suspense fallback={<BoxSkeleton />}>
          <PieChartBox />
        </Suspense>
      </div>

      <div className="box box4">
        <Suspense fallback={<BoxSkeleton />}>
          <BarChartBox {...barChartBoxRevenue} />
        </Suspense>
      </div>

      <div className="box box5">
        <Suspense fallback={<BoxSkeleton />}>
          <BarChartBox {...barChartBoxVisit} />
        </Suspense>
      </div>

      <div className="box box6">
        <Suspense fallback={<BoxSkeleton />}>
          <LineChartBox {...lineChartBoxProduct} />
        </Suspense>
      </div>

      <div className="box box7">
        <Suspense fallback={<BoxSkeleton />}>
          <LineChartBox {...lineChartBoxUser} />
        </Suspense>
      </div>
      <div className="box box8">
        <Suspense fallback={<BoxSkeleton />}>
          <LineChartBox {...lineChartBoxConversion} />
        </Suspense>
      </div>

      <div className="box box9">
        <Suspense fallback={<BoxSkeleton />}>
          <LineChartBox {...lineChartBoxRevenue} />
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(Home);
