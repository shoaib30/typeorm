import {Table} from "../../../../../src/decorator/tables/Table";
import {Column} from "../../../../../src/decorator/columns/Column";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {PostDetails} from "./PostDetails";
import {OneToOne} from "../../../../../src/decorator/relations/OneToOne";
import {JoinColumn} from "../../../../../src/decorator/relations/JoinColumn";

@Table()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => PostDetails)
    @JoinColumn()
    details: PostDetails;

    @Column()
    title: string;

}