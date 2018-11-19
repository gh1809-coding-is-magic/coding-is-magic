using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SheepWalk : MonoBehaviour {

  public Animator anim;
  int walkHash = Animator.StringToHash("Walk");
  int walkStateHash = Animator.StringToHash("New Layer.Walk");
 

	// Use this for initialization
	void Start () {
    print(walkStateHash);


    anim = GetComponent<Animator>();
		
	}
	
	// Update is called once per frame
	void Update () {

    float move = Input.GetAxis("Horizontal");
    anim.SetFloat("Speed", move);

   // AnimatorStateInfo stateInfo = anim.GetCurrentAnimatorStateInfo(0);
    if(Input.GetKeyDown(KeyCode.W)){
      print("I'm walking here! ");
      anim.SetTrigger(walkHash);

    }
		
	}
}
