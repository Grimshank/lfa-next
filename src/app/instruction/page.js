"use client";

import React from 'react';
import ZoomingImageHero from "@/components/hero/ZoomingImageHero";
import Footer from "@/components/Footer";
import {motion} from "framer-motion";
import Image from "next/image";

import classStudents from "../../../public/class_students.jpg";

export default function About() {
  return (
    <main>
      <ZoomingImageHero title={'Painting Instruction'} subtitle={'learn oil and acrylic painting'} src="/morning_hayfield.jpg"/>
      <div className="w-[90%] md:w-[75%] mx-auto mt-[30px]">
        <div>
          <p className="italic font-bold mb-[10px]">
            Teaching Oil and Acrylic Painting: A Journey Through Color and Brushwork
          </p>
        </div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            In teaching oil and acrylic painting to students ranging from beginners to advanced
            artists, I focus on building a strong foundation while encouraging personal expression
            through impressionistic techniques. My approach balances technical skill with artistic
            freedom, guiding students from the very first brushstroke to the final touches of a
            painting.
          </p>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              duration: 2.5,
            }}
            className="mt-[30px] mx-[30px] md:mx-[0px] w-full flex flex-row items-center justify-center"
          >
            <Image className="rounded-2xl" src={classStudents} alt="ClassStudents" width={560} height={418}/>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            We start by exploring how to begin a painting, which is often the most daunting step for
            many. I introduce the importance of planning with an underpainting—usually a loose,
            tonal foundation that helps map out the composition and values before the real work begins.
            This step allows students to understand the structure of their painting without being bogged
            down by details too early on.
          </p>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            Basic drawing skills are critical, and I emphasize both pencil and brush drawing
            techniques. Through simple exercises, students learn to sketch out their subjects,
            focusing on proportion, perspective, and form. These basics give them the confidence to
            transition from drawing to painting fluidly.
          </p>
      </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            Color mixing and palette selection are central to my teaching. Understanding how colors
            interact with one another is key to achieving harmony in a painting. We spend time
            learning how to mix colors effectively, exploring both the subtle shifts and the bold
            contrasts that can bring life to a piece. Whether working with oils or acrylics,
            students
            learn to create a cohesive palette that suits their artistic goals.
          </p>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            Throughout the class, I emphasize the use of color and brushwork. Impressionism, which
            is
            my predominant style, is all about capturing the essence of a scene through loose,
            expressive strokes and vibrant colors. I encourage students to experiment with different
            types of brushwork—from thick, textured strokes to soft blending—so they can find their
            unique voice in their painting.
          </p>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p>
            Ultimately, my goal is to help students not only develop technical skills but also gain
            confidence in their artistic choices. By mastering the basics and then experimenting
            with
            color and brushwork, they can create paintings that are both skillful and deeply
            personal.
          </p>
        </motion.div>
      </div>
      <Footer/>
    </main>
  );
}
