using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bounce : MonoBehaviour {
static Animator anim;
	void Start () {
		anim = GetComponent<Animator>();
	}
	void Update () {
		anim.SetBool("isBounce", true);
	}
}
