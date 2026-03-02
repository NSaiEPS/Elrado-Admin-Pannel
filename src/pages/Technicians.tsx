import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechnicians } from "../store/actions/technicianActions";
import type { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";

const Technicians = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { technicians, technicianLoader } = useSelector(
    (state: RootState) => state.technician,
  );

  useEffect(() => {
    dispatch(getAllTechnicians(() => {}));
  }, []);

  if (technicianLoader) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Technicians</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Add Technician
        </button>
      </div>

      {technicians?.length > 0 ? (
        <div className="mt-4">
          {technicians?.map((technician: any) => (
            <div
              key={technician?._id}
              className="flex items-center justify-between"
            >
              <h1 className="text-xl font-bold">{technician?.name}</h1>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Edit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-center">No technicians found</p>
        </div>
      )}
    </div>
  );
};

export default Technicians;
