import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Utils/Heading";
import Anchor from "@components/Utils/Anchor";
const Contact: NextPage = () => {
  return (
    <>
      <Meta title="Contact" desc="Test" />

      {/* TODO: REFACTOR INTO COMPONENTS */}
      <main className="min-h-screen px-[20%]">
        <Heading content={"Contact Me"} type={"h2"} />
        <Heading content={"Email"} type={"h3"} />
        <Anchor
          text={"jsun1590@gmail.com"}
          href={"mailto:jsun1590@gmail.com"}
        />

        <div className="mb-10" />

        <Heading content={"PGP Key"} type={"h3"} />
        <div
          spellCheck={false}
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="p-3 overflow-y-scroll font-mono border max-w-max h-80"
        >
          -----BEGIN PGP PUBLIC KEY BLOCK-----
          <br />
          Version: Keybase OpenPGP v2.1.15
          <br />
          Comment: https://keybase.io/crypto
          <br />
          <br />
          xo0EYyXg9wEEALpYkPyqT6u9ByzKhfNwlPCMEyrDR/+cu2agDa+8WyYQa1gTlvlo
          <br />
          xI+Z0QEu+LCI4CXqn5ZFFdQe9LsEw3RTr5gWDGcQ0VPmiV08yQ2lcS7t/CnuaXeQ
          <br />
          jJWC66+6Pa3g4nAv0LC7hybUaRDjiTqZlQWXWXritsjzAisxyc3O0tw1ABEBAAHN
          <br />
          HUphY2sgU3VuIDxqc3VuMTU5MEBnbWFpbC5jb20+wrQEEwEKAB4FAmMl4PcCGy8D
          <br />
          CwkHAxUKCAIeAQIXgAMWAgECGQEACgkQwESpSsG5B7qSwAQAofR4wU8wV1KGQv9q
          <br />
          2lwFVeLfGL194MEF5ibPLhJWwdPMG3oBQJjGuXDUnuv6+PRPGI9odA1NacwMkE4i
          <br />
          Q3hFuLGZGcGUfN6xfp5MRqya6Suh20uj9bXT6qZvhkTld3Dh7psm/uVjqxETbR3j
          <br />
          PGgwRDXI1CmPuM5gQs7ExWsq71LOjQRjJeD3AQQAwSaGUSCQmhWkR82bqyDQFJDL
          <br />
          D0/o87eT02qS2w64YoQv6WfTgcqBKf1lQvP3TQaX6tI4DGNBUwULi4ai+zoi+hZV
          <br />
          PxURblhQoie0lVWTfpqiuZrn8TQtEMbckofgA1uOujiJn+ZjvScJWzTxbXyMgltt
          <br />
          H9fNNXkK3hG3dnn23dMAEQEAAcLAgwQYAQoADwUCYyXg9wUJDwmcAAIbLgCoCRDA
          <br />
          RKlKwbkHup0gBBkBCgAGBQJjJeD3AAoJEDSEIHxlNrUN1vAEAKOuYD1kgZ+h7OwN
          <br />
          Q8B07MzrnjcoMWr/DnBFrw1Rd9UXA8l449wu6Txg4KYUloQ7eCCy7oubeaeDeUhn
          <br />
          5k6ccvSZl6mJEy3XS+yqElcIetQzrP+77gpK6TJ7gFqO0QqRLzo8INniYrWYagRJ
          <br />
          QXFBliZSRuz/44UIAQ0ZpDkRG6DhJRAEAInD7jPI4/aZCyfws1Ie5MXL6OvuNqgn
          <br />
          HWX5gt8stYYTXlN/WbOaH8x8870wyY8jAZTWv883etKNl/djCuohym2EljNKaFHk
          <br />
          g5RpV02D6QpO477RDZloKv7G8kdmBOmiwCzUzYw3ghjxtAQHVWE2a1dlYsDkG5Xo
          <br />
          oFVD/XbT2opozo0EYyXg9wEEALO0Tq1udhppAmz36b3R8izFIxLgJkVl6JanugFU
          <br />
          R3doeDByCfpRNC8woO0BW5EeFHjrZJldSDZWbZAwVUsT+Xy955tdQQLacLgyy8fM
          <br />
          Ay0hMqShap0+5FLhz1vdTxiy+1GDJfImxO/eyh1or1qB/tRzd1QGVKvHmgm0dxcI
          <br />
          Y+oDABEBAAHCwIMEGAEKAA8FAmMl4PcFCQPCZwACGy4AqAkQwESpSsG5B7qdIAQZ
          <br />
          AQoABgUCYyXg9wAKCRCORymhYM6tJCpbA/wMqc1bLYqQbvr/xIZaPXY+S/qSYVJh
          <br />
          Bv6NYln7EjMSyCkF+p2Mfhh1fv8g6LkXPNeAgM79tTNRzojgABxQ2dlj3G2f/gWF
          <br />
          ocbvlWAgIvV6+H+mwJUXtfYN4GSlaMThz071bowZof32mp6ohD9qeNTIRk52GNut
          <br />
          mWZTseysRh7UYIsdBAC1hdrprRzWcS3w3LjJ5hbDwWRMP8OjSKApMUmpGa5P28Ki
          <br />
          NYT8+PG9J8UMn9u3jeraP5p2WipzrirEG9OadEl74kGKn/h7KwYqpcaqc/ogl3lH
          <br />
          zdaKmuNCJfM74txkAGAwhMmN6mhBHUm/UjobtjWwQWRl0fTk7i5xMUcGPfn2/Q==
          <br />
          =xwgI
          <br />
          -----END PGP PUBLIC KEY BLOCK-----
        </div>
      </main>
    </>
  );
};

export default Contact;
